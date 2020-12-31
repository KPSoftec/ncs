const constConfig = require('../constants/const.config')
const apiUris = require('./api-uris')

const filterNoFile = (pathname) => pathname.indexOf('/assets/') === -1 || pathname.indexOf('/js/') === -1

const proxies = []
const proxyEndPoint = apiUris.API_CONTEXT.apiContext

// webpack dev server proxy
const devBuildProxy = {
  context: [`${proxyEndPoint}`],
  target: `${constConfig.http}://${constConfig.testServerName}`,
  secure: false,
}

const vagrantProxy = {
  context: [`${proxyEndPoint}`],
  target: `${constConfig.https}://${constConfig.vagrantServerName}`,
  secure: false,
  changeOrigin: true,
}

const htmlProxy = {
  context: ['**/assets/**', '**/js/**', '**/**.html'],
  target: `${constConfig.http}://${constConfig.developmentServerName}`,
  pathRewrite: {
    '.*/assets': '/assets',
    '.*/js': '/js',
    '.*/*.html': '/*.html',
  },
  secure: false,
}

const noFileFilterProxy = {
  context: filterNoFile,
  target: `${constConfig.http}://${constConfig.developmentServerName}`,
  pathRewrite: { '.*': '' },
  secure: false,
}

const updatedProxies = () => {
  if (process.env.BUILD_DOMAIN === 'vagrant') {
    proxies.push(vagrantProxy)
  } else {
    proxies.push(devBuildProxy)
  }
  proxies.push(htmlProxy)
  proxies.push(noFileFilterProxy)
  return (proxies)
}

module.exports = {
  getProxies: () => updatedProxies(),
}
