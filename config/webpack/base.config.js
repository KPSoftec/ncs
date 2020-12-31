const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')

const { root, apiConfig } = require('../helpers')
const { appName, appTitle } = require('../constants/const.config')

const envjs = '<script src="config/env.js"></script>'
const features = '<script src="config/features.js"></script>'
const analytics = '<script src="analytics/analytics.js"></script>'

module.exports = {
  entry: {
    app: './src/app/index.jsx',
  },
  // Tell Weback to output our bundle to ./build/js/bundle.js
  output: {
    path: root('build'),
    filename: 'js/[name].[hash:8].js',
    publicPath: '',
    pathinfo: true,
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [root('src'), 'node_modules'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [root('src'), root('config/helpers'), root('config/constants'), root('node_modules/@')],
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [root('src'), root('config/helpers')],
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          fix: true,
          failOnError: true,
          failOnWarning: false,
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(eot|otf|ttf|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        loader: 'file-loader?name=assets/font/[name].[hash:8].[ext]',
        include: [root('src'), root('node_modules/@')],
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'file-loader?name=assets/img/[name].[hash:8].[ext]',
        include: [root('src'), root('node_modules/@')],
      },
      {
        test: /\.ico$/,
        loader: 'file-loader?name=assets/img/[name].[ext]',
        include: [root('src')],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: root('./config/features/features.js'),
          to: './config',
        },
        {
          from: root('./src/side-effects/analytics.js'),
          to: './analytics',
        },
        {
          from: root('./config/tomcat/env.js'),
          to: './config',
          transform(content) {
          /* for dev build use local proxy than CORS as its causing trouble with
                    connecting android and ios devices as same time */
            const schema = '@frig-lb-scheme@'
            const host = '@frig-gw-pub-unauth-tppsvc-lb-host@'
            const hostName = '@ib-gslb-hostname@'
            if (process.env.BUILD_DOMAIN === 'devBuild') {
            // convert buffer to string
              const strContent = content.toString()
              const transformedValue = strContent.replace(`${schema}://${host}`, '')
              return Buffer.from(transformedValue)
            }
            // if there is no specific build type then do not transform
            if (!apiConfig) return content
            // convert buffer to string
            const strContent = content.toString()
            // replace schema value
            let transformedValue = strContent.replace(schema, apiConfig.schema)
            // replace api server name
            transformedValue = transformedValue.replace(host, apiConfig.serverName)
            // replace value for IB redirect path
            transformedValue = transformedValue.replace(hostName, apiConfig.ibHostName)
            return Buffer.from(transformedValue)
          },
        }],
    }),
    new HtmlWebPackPlugin({
      title: appTitle,
      template: './src/index.html',
      templateParameters: {
        title: appTitle,
        scripts: `${envjs} ${features} ${analytics}`,
      },
      favicon: './src/assets/img/favicon.ico',
      filename: 'index.html',
      inject: 'body',
      base: process.env.BUILD_DOMAIN === 'release' ? `/${appName}/` : '/',
      scripts: '',
    }),
  ],
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
    hints: false,
  },
}
