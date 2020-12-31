const express = require('express')
const serveStatic = require('serve-static')

const configProxies = require('../config/helpers/dev-proxies')
const { proxyPort } = require('../config/constants/const.config')

const server = express()

// Serve up public/ftp folder
const serve = serveStatic('build', { index: ['index.html', 'index.htm'] })

// Create Insecure server

server.use(serve)
server.use(configProxies.getProxies())

server.listen(proxyPort)
// eslint-disable-next-line no-console
console.log(`server started at http://localhost:${proxyPort}`)
