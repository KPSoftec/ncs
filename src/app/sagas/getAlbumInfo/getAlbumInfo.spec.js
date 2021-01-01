import { call, put } from 'redux-saga/effects'

import * as ApiConfig from '../../utils/apiConfig'
import { ALBUMINFO_SUCCESS, ALBUMINFO_FAILURE } from '../../reducers/albumInfoDetailsReducer'

import * as getProfile from '.'

const getProfileGenerator = getProfile.getAlbumInfo()
const successResponse = {
  data: {},
}
const errorResponse = {
  error: {},
}

const expectedHeaders = {
  headers: {
    'Application-ID': 'au-ob',
    'Channel-Function': 'Auth_Management',
    'Channel-ID': 'web-ob',
    // Authorization: 'Bearer 00000.0000',
    RequestID: expect.any(String),
  },
  params: {
    store: undefined,
  },
}

describe('Get AlbumInfo API Config', () => {
  test('Check get AlbumInfo API Call', () => {
    expect(getProfileGenerator.next().value).toEqual(call(getProfile.getAlbumInfoDataAction))
  })

  test('Check for reducer call of api response', () => {
    expect(getProfileGenerator.next(successResponse).value).toEqual(put({
      payload: successResponse,
      type: ALBUMINFO_SUCCESS,
    }))
  })

  test('Check for reducer call of api Error response', () => {
    expect(getProfileGenerator.throw(errorResponse).value).toEqual(put({
      payload: errorResponse,
      type: ALBUMINFO_FAILURE,
    }))
  })

  test('Check for API axios instance call', () => {
    ApiConfig.getUUIDTimeBased = jest.fn()
    const mockPostFunction = { post: jest.fn() }
    ApiConfig.getApiConfig = jest.fn(() => mockPostFunction)
    getProfile.getAlbumInfoDataAction()
    expect(mockPostFunction.post).toHaveBeenCalledWith(
      ApiConfig.apiUriConfig.getTppInfo,
      {},
      expectedHeaders,
    )
  })
})
