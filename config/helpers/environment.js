// get available environment setting
const configConstants = require('../constants/const.config')

exports.apiConfig = ((env = process.env.BUILD_DOMAIN) => {
  switch (env) {
    case 'development':
      return {
        schema: configConstants.unknownProtocol,
        serverName: configConstants.unknownServerName,
        ibHostName: configConstants.unknownIbHostName,
      }
    case 'ci':
      return {
        schema: configConstants.unknownProtocol,
        serverName: configConstants.unknownServerName,
        ibHostName: configConstants.unknownIbHostName,
      }
    case 'test':
      return {
        schema: configConstants.http,
        serverName: configConstants.testServerName,
        ibHostName: configConstants.unknownIbHostName,
      }
    case 'grid':
      return {
        schema: configConstants.http,
        serverName: configConstants.gridServerName,
        ibHostName: configConstants.unknownIbHostName,
      }
    case 'vagrant':
      return {
        schema: configConstants.https,
        serverName: configConstants.vagrantServerName,
        ibHostName: configConstants.unknownIbHostName,
      }
    default:
      return undefined
  }
})()
