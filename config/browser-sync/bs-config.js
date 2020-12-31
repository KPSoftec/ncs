/**
 * Require Browsersync along with webpack and middleware for it
 */
const webpack = require('webpack')

const historyApiFallback = require('connect-history-api-fallback')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')

const { env } = require('yargs').argv
const configProxies = require('../helpers/dev-proxies')
const { proxyPort } = require('../constants/const.config')
/**
 * Require ./webpack.config.js and make a bundler from it
 */
const webpackConfig = require('../../webpack.config')(env)

const bundler = webpack(webpackConfig)

/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 |
 */

const middleware = [
  webpackDevMiddleware(bundler, {
    // IMPORTANT: dev middleware can't access config, so we should
    // provide publicPath by ourselves
    publicPath: webpackConfig.output.publicPath,

    // pretty colored output
    stats: { colors: true },

    // for other settings see
    // http://webpack.github.io/docs/webpack-dev-middleware.html
  }),
  webpackHotMiddleware(bundler),
  historyApiFallback({
    index: webpackConfig.output.publicPath,
  }),
].concat(configProxies.getProxies())

module.exports = {
  ui: {
    port: proxyPort + 1,
  },
  files: [
    '../src/index.html',
  ],
  watchEvents: [
    'change',
  ],
  watch: true,
  ignore: [],
  single: false,
  watchOptions: {
    ignoreInitial: true,
  },
  server: {
    baseDir: 'src',
    index: 'index.html',
    middleware,
  },
  proxy: false,
  port: proxyPort,
  middleware: false,
  serveStatic: [],
  ghostMode: {
    clicks: true,
    scroll: true,
    location: true,
    forms: {
      submit: true,
      inputs: true,
      toggles: true,
    },
  },
  logLevel: 'info',
  logPrefix: 'Browsersync',
  logConnections: false,
  logFileChanges: true,
  logSnippet: true,
  rewriteRules: [],
  open: 'local',
  browser: 'default',
  cors: false,
  xip: false,
  hostnameSuffix: false,
  reloadOnRestart: false,
  notify: true,
  scrollProportionally: true,
  scrollThrottle: 0,
  scrollRestoreTechnique: 'window.name',
  scrollElements: [],
  scrollElementMapping: [],
  reloadDelay: 0,
  reloadDebounce: 500,
  reloadThrottle: 0,
  plugins: [],
  injectChanges: true,
  startPath: null,
  minify: true,
  host: null,
  localOnly: false,
  codeSync: true,
  timestamps: true,
  clientEvents: [
    'scroll',
    'scroll:element',
    'input:text',
    'input:toggles',
    'form:submit',
    'form:reset',
    'click',
  ],
  socket: {
    socketIoOptions: {
      log: false,
    },
    socketIoClientConfig: {
      reconnectionAttempts: 50,
    },
    path: '/browser-sync/socket.io',
    clientPath: '/browser-sync',
    namespace: '/browser-sync',
    clients: {
      heartbeatTimeout: 5000,
    },
  },
  tagNames: {
    less: 'link',
    scss: 'link',
    css: 'link',
    jpg: 'img',
    jpeg: 'img',
    png: 'img',
    svg: 'img',
    gif: 'img',
    js: 'script',
  },
  injectNotification: false,
}
