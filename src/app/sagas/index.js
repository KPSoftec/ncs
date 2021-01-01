import { all, takeLatest } from 'redux-saga/effects'

import { getAlbumInfo } from './getAlbumInfo'
import { ALBUMINFO_REQUEST } from '../reducers/albumInfoDetailsReducer'

// single entry point to start all the sagas, our root saga, a generator function
export function* rootSaga() {
  yield all([
    takeLatest(ALBUMINFO_REQUEST, getAlbumInfo),
  ])
}

export default rootSaga
