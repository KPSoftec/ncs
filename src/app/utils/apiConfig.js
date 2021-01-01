import axios from 'axios'
import apiUris from '../../../config/helpers/api-uris'

export const apiUriConfig = {
  ...apiUris.API_PATHS_DATAPOWER,
}

export const getBaseUrl = () => (`${window.hubOrchHost || '/'}`)

export const axiosInstance = () => axios.create({
  /* if application was built with prod mode then pick api domain path from
  tomact env file in which uDeploy will update deployment path
  else for non prod builds content server path will be domain path from API
  "window.hubOrchHost" is set in env.js file which is loaded as asset during build process
  apiServer will contain "window.hubOrchHost" from features.js.
  */
  baseURL: getBaseUrl(),
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
})

export const setApiUriConfig = (key, val) => {
  apiUriConfig[key] = val
}

export const getApiConfig = () => axiosInstance()
