const { API_PATHS_DATAPOWER } = require('../../helpers/api-uris')

const apiUris = API_PATHS_DATAPOWER

const wait = 100

exports.validMockTest = {
  predicates: [
    {
      equals: {
        method: 'GET',
        path: `${apiUris.initAuth}`,
      },
    },
  ],
  responses: [
    {
      is: {
        statusCode: 200,
        headers: { 'Access-Control-Allow-Origin': '*' },
        body: {
          status: '200ok',
          message: 'API found',
        },
      },
      _behaviors: {
        wait,
      },
    },
  ],
}
