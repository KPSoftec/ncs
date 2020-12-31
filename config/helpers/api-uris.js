exports.API_CONTEXT = {
  apiContext: '/api',
  stEnvContext: '/delegate',
  ciEnvContext: '/',
}

exports.API_PATHS_DATAPOWER = {
  // To Be used as an endpoint to mountebank stubs
  initAuth: `${this.API_CONTEXT.apiContext}${this.API_CONTEXT.stEnvContext}/verify`,
}
