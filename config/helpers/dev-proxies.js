const { createProxyMiddleware } = require('http-proxy-middleware')
const constConfig = require('../constants/const.config')
const apiUris = require('./api-uris')

const filterNoFile = (pathname) => pathname.indexOf('/assets/') === -1 || pathname.indexOf('/js/') === -1

const staticProxies = []
const proxyEndPoint = apiUris.API_CONTEXT.apiContext

// using create-proxy-middleware
const localStaticProxy = createProxyMiddleware(`${proxyEndPoint}`, {
  target: `${constConfig.http}://${constConfig.testServerName}`,
  changeOrigin: true,
  secure: false,
})

const htmlStaticProxy = createProxyMiddleware(['**/assets/**', '**/js/**', '**/**.html'], {
  target: `${constConfig.http}://${constConfig.developmentServerName}`,
  pathRewrite: {
    '.*/assets': '/assets',
    '.*/js': '/js',
    '.*/*.html': '/*.html',
  },
  secure: false,
})

const noFilterStaticProxy = createProxyMiddleware(filterNoFile, {
  target: `${constConfig.http}://${constConfig.developmentServerName}`,
  pathRewrite: { '.*': '' },
  secure: false,
})

const updatedStaticProxies = () => {
  staticProxies.push(localStaticProxy)
  staticProxies.push(htmlStaticProxy)
  staticProxies.push(noFilterStaticProxy)
  return (staticProxies)
}

module.exports = {
  getProxies: () => updatedStaticProxies(),
}
