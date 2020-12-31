const {
  serverName, http, mountebankUrl, automationServerName,
} = require('./constants/const.config')

let config

if (process.env.TEST_DOMAIN === 'ci') {
  config = {
    baseUrl: `${http}://${serverName}`,
    mountebankUrl: `${http}://${mountebankUrl}`,
    maxInstance: 5,
    dataSheet: 'st',
    browser: 'multi',
    seleniumServerAddress: 'http://localhost:4444/wd/hub',
    seleniumServerHost: 'localhost',
    seleniumServerPort: 4444,
    tagExpression: 'not @Deprecated and not @WIP and not @Duplicate and not @OOS',
    feature: '*',
  }
} else {
  config = {
    baseUrl: `${http}://${automationServerName}/`,
    mountebankUrl: `${http}://${mountebankUrl}`,
    maxInstance: 4,
    dataSheet: 'st',
    browser: 'multi',
    tagExpression: 'not @Deprecated and not @WIP and not @Duplicate and not @OOS',
    feature: '*',
  }
}

module.exports = config
