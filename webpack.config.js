/**
 * Webpack4 allows for a function to be exported. This function will
 * be a representation of the command line's --env objects. This allows
 * us to write customisations logically using the env object.
 */
module.exports = (options = {}) => {
  switch (process.env.NODE_ENV) {
    case 'production':
      return require('./config/webpack/prod.config.js')
    case 'development':
      return require('./config/webpack/dev.config.js')(options)
    case 'dll':
      return require('./config/webpack/dll.config.js')(options)
    default:
      return require('./config/webpack/prod.config.js')
  }
}
