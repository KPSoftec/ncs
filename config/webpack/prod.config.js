const merge = require('webpack-merge')
const { DefinePlugin, LoaderOptionsPlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const baseConfig = require('./base.config')
const { root } = require('../helpers')

const production = 'production'

module.exports = merge(baseConfig, {
  mode: production,
  devtool: 'hidden-source-map',
  plugins: [
    ...baseConfig.plugins,
    /** * Set environment variable to production OR retain env value */
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || production),
    }),
    /** * Loader Options */
    new LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    /** * Minfication * webpack v4+ will minify your code by default in production mode. */
    new CopyWebpackPlugin({
      patterns: [
        {
          from: root('./config/tomcat/web.xml'), to: './WEB-INF',
        },
      ],
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin({
      extractComments: true,
      sourceMap: true,
      uglifyOptions: {
        mangle: {
          keep_fnames: true,
        },
      },
    })],
    splitChunks: {
      chunks: 'all',
    },
    runtimeChunk: {
      name: 'manifest',
    },
  },
})
