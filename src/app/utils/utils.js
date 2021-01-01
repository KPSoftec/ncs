import constants from '../../../config/constants/const.config'

export const numberToOrdinalWord = (number) => {
  const num = parseInt(number, 10)
  const str = String(num)
  const lastTwoDigits = Math.abs(num % 100)
  const betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13
  const lastChar = str.charAt(str.length - 1)
  // eslint-disable-next-line no-nested-ternary
  return str + (betweenElevenAndThirteen ? 'th'
  // eslint-disable-next-line no-nested-ternary
    : (lastChar === '1') ? 'st'
    // eslint-disable-next-line no-nested-ternary
      : (lastChar === '2') ? 'nd'
        : (lastChar === '3') ? 'rd'
          : '')
}

const getValueByScenario = (subObj) => (subObj.value.indexOf('|') > -1 ? subObj.value.split('|')[1] : subObj.value)

export const reduceJSONresponse = (collection, scenario, objType = 'TextOutputCallback', objkey = 'output', subObjName = 'message') => {
  let result
  const filteredObj = collection.filter((itm) => itm.type === objType)
  filteredObj.forEach((obj) => {
    obj[objkey].forEach((subObj) => {
      if (subObj.name === subObjName && scenario === 'tppInfoReq' && subObj.value.indexOf('~') > -1) {
        // Data Recipient name fetch
        // eslint-disable-next-line prefer-destructuring
        result = getValueByScenario(subObj)
      } else if (subObj.name === subObjName && subObj.value.indexOf(scenario) > -1) {
        result = getValueByScenario(subObj)
      }
    })
  })
  return result
}

export const mapErrorData = (error) => {
  let errorData

  try {
    errorData = error.response.data || {}
  } catch (err) {
    errorData = {}
  }

  return errorData
}

// Supported Function with lessBranding check from features.js.
export const setAppTitle = (appTitle) => {
  window.document.title = `${appTitle || constants.appTitle}`
}
