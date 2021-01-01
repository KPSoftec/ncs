import { combineReducers } from 'redux'

import albumInfo from './albumInfoDetailsReducer'

const rootReducer = combineReducers({
  albumInfo,
})

export default rootReducer
