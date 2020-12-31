const { DllPlugin } = require('webpack')
const { dependencies } = require('../../package.json')
const { root, writeFile } = require('../helpers')

// eslint-disable-next-line no-unused-vars
module.exports = (options = {}) => {
  /**
   * Create a definition of the DLL to compare against
   * when running the devserver, so that we can stop if
   * there are mismatched dependencies.
   */
  writeFile('.dll/integrity.json', JSON.stringify(dependencies))

  return {
    /**
     * Create a DLL instance for our dependencies
     */
    mode: 'development',
    entry: {
      dependencies: Object.keys(dependencies),
    },
    /**
     * Define the DLL naming scheme
     */
    output: {
      filename: '[name].bundle.js',
      path: root('.dll'),
      library: '[name]_lib',
    },
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          use: [
            {
              loader: 'babel-loader',
            },
          ],
          include: [root('node_modules/@')],
        },
        {
          test: /\.(eot|otf|ttf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
          loader: 'file-loader?name=assets/font/[name].[hash:8].[ext]',
          include: [root('node_modules/@')],
        },
        {
          test: /\.(jpe?g|png|gif|svg|ico)$/,
          loader: 'file-loader?name=assets/img/[name].[hash:8].[ext]',
          include: [root('node_modules/@')],
        },
      ],
    },
    plugins: [
      /**
       * Convert the packages into a DLL for static file consumption
       */
      new DllPlugin({
        path: '.dll/[name]-manifest.json',
        name: '[name]_lib',
      }),
    ],
  }
}
