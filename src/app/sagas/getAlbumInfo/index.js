import { call, put } from 'redux-saga/effects'

import { albuminfosuccess, albuminfofailure } from '../../reducers/albumInfoDetailsReducer'

import * as ApiConfig from '../../utils/apiConfig'
import { mapErrorData } from '../../utils/utils'
import { getQueryParamsObj } from '../../utils/global'

export const getAlbumInfoDataAction = () => {
  const queryParams = getQueryParamsObj()
  const profileService = ApiConfig.getApiConfig()
  return profileService.get(
    ApiConfig.apiUriConfig.initCall,
    { },
    {
      params: { ...queryParams },
    },
  )
}

export function* getAlbumInfo() {
  try {
    const response = yield call(getAlbumInfoDataAction)
    yield put(albuminfosuccess(response.data))
  } catch (error) {
    yield put(albuminfofailure(mapErrorData(error)))
  }
}
