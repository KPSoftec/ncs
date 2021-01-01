import { createStore } from 'redux'
import rootReducer from '.'
import tppInfoDetails from './tppInfoDetailsReducer'
// import verifyChallengeData from './updateDataDetails/verifyChallengeReducer'
// import editPersonData from './updateDataDetails/editDataReducer'
// import sessionExpiryData from './sessionExpiryReducer'
// import historyApiData from './historyApiReducer'
// import contextData from './contextReducer'
// import crnDetails from './authCRNDetails'
// import setInputCRNValueData from './inputCRNValue'

describe('combineReducers', () => {
  it('check that initial state of the root reducer matches child reducers with empty action', () => {
    const store = createStore(rootReducer)
    expect(store.getState().tppInfo).toEqual(tppInfoDetails(undefined, {}))
    // expect(store.getState().verifyChallengeData).toEqual(verifyChallengeData(undefined, {}))
    // expect(store.getState().editPersonData).toEqual(editPersonData(undefined, {}))
    // expect(store.getState().sessionExpiryData).toEqual(sessionExpiryData(undefined, {}))
    // expect(store.getState().historyApiData).toEqual(historyApiData(undefined, {}))
    // expect(store.getState().contextData).toEqual(contextData(undefined, {}))
    // expect(store.getState().crnDetails).toEqual(crnDetails(undefined, {}))
    // expect(store.getState().setInputCRNValueData).toEqual(setInputCRNValueData(undefined, {}))
  })
})
