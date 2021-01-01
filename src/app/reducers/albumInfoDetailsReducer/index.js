import { createActions, handleActions, combineActions } from 'redux-actions'

// Actions
export const ALBUMINFO_REQUEST = 'ALBUMINFOFETCH'
export const ALBUMINFO_SUCCESS = 'ALBUMINFOSUCCESS'
export const ALBUMINFO_FAILURE = 'ALBUMINFOFAILURE'
export const ALBUMINFO_RESET = 'ALBUMINFORESET'

const initialState = {
  data: null,
  error: null,
  inProgress: false,
}

export const {
  albuminfofetch,
  albuminfosuccess,
  albuminfofailure,
  albuminforeset,
} = createActions({
  [ALBUMINFO_REQUEST]: () => ({ ...initialState, inProgress: true }),
  [ALBUMINFO_SUCCESS]: (data) => ({ ...initialState, data }),
  [ALBUMINFO_FAILURE]: (error) => ({ ...initialState, error }),
  [ALBUMINFO_RESET]: () => initialState,
})

const albumInfoDataReducer = handleActions({
  [combineActions(
    albuminfofetch,
    albuminfosuccess,
    albuminfofailure,
    albuminforeset,
  )](state, {
    payload: { data, error, inProgress },
  }) {
    return {
      ...state, data, error, inProgress,
    }
  },
}, initialState)

export default albumInfoDataReducer
