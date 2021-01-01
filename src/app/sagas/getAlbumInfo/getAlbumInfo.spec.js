import { call, put } from 'redux-saga/effects'

import * as ApiConfig from '../../utils/apiConfig'
import { TPPINFO_SUCCESS, TPPINFO_FAILURE } from '../../reducers/tppInfoDetailsReducer'
import { EDIT_DATA_RESET } from '../../reducers/updateDataDetails/editDataReducer'

import * as getProfile from '.'

const getProfileGenerator = getProfile.getTPPInfo()
const successResponse = {
  data: {},
}
const errorResponse = {
  error: {},
}
const editReset = {
  edit: false,
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

describe('Get TPPInfo API Config', () => {
  test('Check for edit person state reset', () => {
    expect(getProfileGenerator.next().value).toEqual(put({
      payload: editReset,
      type: EDIT_DATA_RESET,
    }))
  })

  test('Check get TPPInfo API Call', () => {
    expect(getProfileGenerator.next().value).toEqual(call(getProfile.getTPPInfoDataAction))
  })

  test('Check for reducer call of api response', () => {
    expect(getProfileGenerator.next(successResponse).value).toEqual(put({
      payload: successResponse,
      type: TPPINFO_SUCCESS,
    }))
  })

  test('Check for reducer call of api Error response', () => {
    expect(getProfileGenerator.throw(errorResponse).value).toEqual(put({
      payload: errorResponse,
      type: TPPINFO_FAILURE,
    }))
  })

  test('Check for API axios instance call', () => {
    ApiConfig.getUUIDTimeBased = jest.fn()
    const mockPostFunction = { post: jest.fn() }
    ApiConfig.getApiConfig = jest.fn(() => mockPostFunction)
    getProfile.getTPPInfoDataAction()
    expect(mockPostFunction.post).toHaveBeenCalledWith(
      ApiConfig.apiUriConfig.getTppInfo,
      {},
      expectedHeaders,
    )
  })
})
