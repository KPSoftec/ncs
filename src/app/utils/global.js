import { URL_KEYS, URL_VALUES } from './url-params.constants'
import device from './device'
import { getSessionStorage, setSessionStorage } from './sessionStorage'

const { mobile, os } = device
export const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent)
export const isFirefox = /^((?!chrome|android|seamonkey).)*firefox/i.test(navigator.userAgent)

export const isIE = (userAgent = window.navigator.userAgent) => userAgent.indexOf('MSIE ') > -1
  || userAgent.indexOf('Trident/') > -1
  || userAgent.indexOf('Edge/') > -1

export const isIEEdge = (userAgent = window.navigator.userAgent) => userAgent.indexOf('Edge/') > -1

export const getQueryStringByName = (name) => {
  const locationSearch = window.location.search
  const match = RegExp(`[?&]${name}=([^&]*)`, 'i').exec(locationSearch)
  return match && decodeURIComponent(match[1].replace(/\+/g, ' '))
}

export const isMobileDevice = () => (mobile)

export const isIOS = () => {
  const theme = getQueryStringByName(URL_KEYS.clientTypeKey)
  const isIosDevice = os.toLowerCase().indexOf(URL_VALUES.ios.toLowerCase()) >= 0
  return (isIosDevice || (!!theme
    && theme.toLowerCase()
    === URL_VALUES.ios.toLowerCase()))
}
export const isAndroid = () => {
  const theme = getQueryStringByName(URL_KEYS.clientTypeKey)
  const isAndroidDevice = os.toLowerCase().indexOf(URL_VALUES.android.toLowerCase()) >= 0
  return (isAndroidDevice || (!!theme
    && theme.toLowerCase()
    === URL_VALUES.android.toLowerCase()))
}

export const isMobileAppChannel = () => (isMobileDevice() || isIOS() || isAndroid())

export const setQueryParamsObj = () => {
  const queryParamsString = window.location.search.substr(1)
  queryParamsString.split('&').forEach((singleQueryParam) => {
    const [key, value] = singleQueryParam.split('=')
    getQueryStringByName(key)
    setSessionStorage(key, value)
  })
}

/* eslint-disable no-param-reassign */
export const getQueryParamsObj = () => {
  const params = Object.keys(sessionStorage).reduce((obj, key) => {
    obj[key] = getSessionStorage(key)
    return obj
  }, {})
  return params
}
