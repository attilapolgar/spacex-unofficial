import handleActions from 'redux-actions/lib/handleActions'

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
}

const defaultState = {
  data: null,
  preloadState: { ...initialRequestState },
}

export const PRELOAD_ASSETS_REQUESTED = 'PRELOAD_ASSETS_REQUESTED'
export const PRELOAD_ASSETS_FAILED = 'PRELOAD_ASSETS_FAILED'
export const PRELOAD_ASSETS_SUCCEEDED = 'PRELOAD_ASSETS_SUCCEEDED'

export const preloadAssetsRequested = () => ({
  type: PRELOAD_ASSETS_REQUESTED,
})

export const preloadAssetsFailed = payload => ({
  type: PRELOAD_ASSETS_FAILED,
  payload,
})

export const preloadAssetsSucceeded = payload => ({
  type: PRELOAD_ASSETS_SUCCEEDED,
  payload,
})

const reducers = handleActions(
  {
    [PRELOAD_ASSETS_REQUESTED]: (state, action) => ({
      ...state,
      preloadState: {
        pending: true,
        success: false,
        failed: false,
      },
    }),
    [PRELOAD_ASSETS_SUCCEEDED]: (state, action) => ({
      ...state,
      preloadState: {
        pending: false,
        success: true,
        failed: false,
        errorMessage: null,
      },
    }),
    [PRELOAD_ASSETS_FAILED]: (state, action) => ({
      ...state,
      preloadState: {
        pending: false,
        success: false,
        failed: true,
      },
    }),
  },
  defaultState
)

export default reducers
