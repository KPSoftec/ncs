const ip = require('ip')

const automationPort = 4200
const developmentPort = 3000
const proxyPort = process.env.BUILD_DOMAIN === 'test' ? automationPort : developmentPort
const appName = 'reactboilerplate'
const appTitle = 'React-BoilerPlate'

const constants = {
  appName,
  appTitle,
  automationServerName: `localhost:${automationPort}`,
  developmentServerName: `localhost:${proxyPort}`,
  gridServerName: `${ip.address()}:4545`,
  https: 'https',
  http: 'http',
  ibHostName: '',
  mountebankUrl: 'localhost:2525',
  proxyPort,
  serverName: `${ip.address()}:${proxyPort}`,
  testServerName: 'localhost:4545',
  unknownServerName: '',
  unknownIbHostName: '',
  unknownProtocol: '',
  vagrantServerName: 'vagrant-rhel.localdomain:22443',
}

module.exports = constants
