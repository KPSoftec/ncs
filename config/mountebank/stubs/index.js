const apiUris = require('../../helpers/api-uris')

const mountebankDataMock = require('./mountebankDataMock')

const headersAllowed = [
  'Access-Control-Allow-Origin',
  'Access-Control-Allow-Headers',
  'APPLICATION-ID',
  'RequestID',
  'Application-Version',
  'Content-Type',
  'Device-ID',
  'Client-IP',
  'Channel-Function',
  'Authorization',
  'Channel-ID',
  'PersonID',
]

const proxyEndPoint = apiUris.API_CONTEXT.apiContext
const optionsRequest = {
  predicates: [
    {
      equals: {
        method: 'OPTIONS',
      },
      startsWith: {
        path: `${proxyEndPoint}`,
      },
    },
  ],
  responses: [
    {
      is: {
        statusCode: 200,
        headers: {
          'Access-Control-Allow-Origin': '*',
          Allow: 'OPTIONS,POST,PUT',
          'Content-Type': 'application/xml',
          'Access-Control-Allow-Headers': headersAllowed.join(','),
          'Access-Control-Allow-Methods': 'OPTIONS,POST,PUT',
        },
        body: '',
      },
      _behaviors: {
        wait: 100,
      },
    },
  ],
}

module.exports = () => {
  const idHubImposter = {}
  idHubImposter.port = 4545
  idHubImposter.protocol = 'http'
  idHubImposter.name = 'API Stub'
  idHubImposter.stubs = []

  idHubImposter.stubs.push(optionsRequest)

  Object.keys(mountebankDataMock).forEach((keyName) => {
    idHubImposter.stubs.push(mountebankDataMock[keyName])
  })

  return idHubImposter
}
