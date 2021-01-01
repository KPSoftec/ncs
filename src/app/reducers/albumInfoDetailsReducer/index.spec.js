import * as albumInfoDetailsReducerData from '.'

const responseData = { dummyData: true }
const errorResponse = { errorData: true }

describe('albumInfoDetailsReducerData', () => {
  test('Dispatch for service request', () => {
    expect(albumInfoDetailsReducerData.albuminfofetch()).toEqual({
      type: albumInfoDetailsReducerData.ALBUMINFO_REQUEST,
      payload: { inProgress: true },
    })
  })

  test('Response of success callback', () => {
    expect(albumInfoDetailsReducerData.albuminfosuccess(responseData)).toEqual({
      type: albumInfoDetailsReducerData.ALBUMINFO_SUCCESS,
      payload: { data: responseData },
    })
  })

  test('Response of error callback', () => {
    expect(albumInfoDetailsReducerData.albuminfofailure(errorResponse)).toEqual({
      type: albumInfoDetailsReducerData.ALBUMINFO_FAILURE,
      payload: { error: errorResponse },
    })
  })

  test('Reset state', () => {
    expect(albumInfoDetailsReducerData.albuminforeset()).toEqual({
      type: albumInfoDetailsReducerData.ALBUMINFO_RESET,
      payload: {
        data: null,
        error: false,
        inProgress: false,
      },
    })
  })

  test('Test reducer response to success promise', () => {
    expect(albumInfoDetailsReducerData.default(
      undefined,
      albumInfoDetailsReducerData.albuminfosuccess(responseData),
    ))
      .toEqual({ data: responseData })
  })

  test('Test reducer response to error promise', () => {
    expect(albumInfoDetailsReducerData.default(
      undefined,
      albumInfoDetailsReducerData.albuminfofailure(errorResponse),
    ))
      .toEqual({ error: errorResponse })
  })

  test('Test reducer response to request promise', () => {
    expect(albumInfoDetailsReducerData.default(
      undefined,
      albumInfoDetailsReducerData.albuminfofetch(),
    ))
      .toEqual({ inProgress: true })
  })
})
