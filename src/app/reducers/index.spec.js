import { createStore } from 'redux'
import rootReducer from '.'
import albumInfoDetails from './albumInfoDetailsReducer'

describe('combineReducers', () => {
  it('check that initial state of the root reducer matches child reducers with empty action', () => {
    const store = createStore(rootReducer)
    expect(store.getState().tppInfo).toEqual(albumInfoDetails(undefined, {}))
  })
})
