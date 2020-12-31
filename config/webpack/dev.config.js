const merge = require('webpack-merge')
const {
  DllReferencePlugin, HotModuleReplacementPlugin, DefinePlugin,
  EnvironmentPlugin,
} = require('webpack')
const baseConfig = require('./base.config')
const { root, fileExists } = require('../helpers')
const configProxies = require('../helpers/dev-proxies-wp')
const { proxyPort } = require('../constants/const.config')

const DllDoesntExistMessage = `
=======          DLL's NOT DETECTED          =======
=======                                      =======
=======    run the script "yarn dll" in   =======
=======  order to generate the DLL Manifest. =======
=======                                      =======
======= This will increase the speed of your =======
=======      DEVELOPMENT recompilations      =======
`

const DllOutdatedMessage = `
=======          DLL's Are OUTDATED          =======
=======                                      =======
=======   run the script "yarn dll" in    =======
=======   order to generate an updated DLL   =======
=======               Manifest.              =======
=======                                      =======
======= This will increase the speed of your =======
=======      DEVELOPMENT recompilations      =======
`

const isDevOrVag = (process.env.BUILD_DOMAIN === 'devBuild' || process.env.BUILD_DOMAIN === 'vagrant')
const development = 'development'

module.exports = () => {
  const config = merge(baseConfig, {
    mode: development,
    devtool: 'inline-source-map',
    watch: isDevOrVag,
    entry: [
      '@babel/polyfill',
      'core-js',
      'webpack-hot-middleware/client',
      'webpack/hot/only-dev-server',
      baseConfig.entry.app,
    ],
    output: {
      ...baseConfig.output,
    },
    devServer: {
      contentBase: root('build'),
      port: proxyPort,
      proxy: configProxies.getProxies(),
      overlay: true,
    },
    plugins: [
      ...baseConfig.plugins,
      new EnvironmentPlugin({
        NODE_ENV: development, // use 'development' unless process.env.NODE_ENV is defined
      }),
      /** * Set environment variable to development */
      new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || development),
      }),
      new HotModuleReplacementPlugin(),
    ],
  })

  const deepEqualCheck = (a, b) => (JSON.stringify(a) === JSON.stringify(b))

  /**
   * Check if DLL and Integrity files exist
   */
  if (fileExists('.dll/dependencies-manifest.json') && fileExists('.dll/integrity.json')) {
    /**
     * Declare two objects for comparison
     */
    const integrity = require(root('.dll/integrity.json'))
    const { dependencies } = require(root('package.json'))

    /**
     * Deep compare the integrity against the package JSON.
     * This allows us to emit errors to the developer to warn
     * them to update their dependencies.
     */
    if (deepEqualCheck(integrity, dependencies)) {
      /**
       * Add the DLL Reference Plugin if pass both checks
       */
      config.plugins = [
        ...config.plugins,
        new DllReferencePlugin({
          context: '.dll',
          manifest: require(root('.dll/dependencies-manifest.json')),
        }),
      ]
    } else {
      /**
       * Emit error that the DLL doesn't match the package.json
       */
      console.log(DllOutdatedMessage)
      process.exit()
    }
  } else {
    /**
     * Emit error that the DLL's don't exist
     */
    console.log(DllDoesntExistMessage)
    process.exit()
  }

  return config
}
