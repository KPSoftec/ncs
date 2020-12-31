const browserSync = require('browser-sync')
const config = require('./browser-sync/bs-config')
/**
 * Run Browsersync and use middleware for Hot Module Replacement
 */
browserSync(config)
