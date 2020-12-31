const axios = require('axios')

const { mountebankUrl } = require('../environment-properties')
const idHubStubs = require('./stubs/index')

const stubImposters = { imposters: [] }

stubImposters.imposters.push(idHubStubs())

const axiosInstance = axios.create({
  baseURL: mountebankUrl,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
  },
})

Promise.resolve(axiosInstance.put('/imposters', stubImposters)
  .then(() => {
    console.log('Mountebank setup finished.')
    console.log('Stubs can be accessed in ', mountebankUrl)
  })
  .catch((error) => {
    console.log(error)
  }))
