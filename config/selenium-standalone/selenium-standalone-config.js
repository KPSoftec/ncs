module.exports = {
  version: '3.141.5',
  baseURL: 'http://localhost:9090/selenium-server',
  drivers: {
    chrome: {
      version: '2.43',
      arch: process.arch,
      baseURL: 'http://localhost:9090/chromedriver',
    },
    firefox: {
      version: '0.23.0',
      arch: process.arch,
      baseURL: 'http://localhost:9090/geckodriver',
    },
  },
  ignoreExtraDrivers: true,
  requestOpts: {
    timeout: 10000,
  },
}
