let sessionStorage = {}
const storageType = 'sessionStorage'
export const setSessionStorage = (key, value) => {
  window[storageType].setItem(key, value)

  sessionStorage[key] = value
}

export const getSessionStorage = (key) => {
  let returnValue
  if (sessionStorage[key]) {
    returnValue = sessionStorage[key]
  } else {
    returnValue = window[storageType].getItem(key)
  }

  return returnValue
}

export const clearSessionStorage = () => {
  sessionStorage = {}
  window[storageType].clear()
}

export const deleteSessionItem = (key) => {
  delete sessionStorage[key]
  window[storageType].removeItem(key)
}

export const isSessionStorageEmpty = () => {
  let doSessionStorageHasAnItem = false
  const sessionStorageItemsCount = window[storageType].length
  if (sessionStorageItemsCount === 0) {
    doSessionStorageHasAnItem = true
  }
  return doSessionStorageHasAnItem
}
