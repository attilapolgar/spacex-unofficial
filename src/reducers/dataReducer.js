import { createActions, handleActions } from 'redux-actions'

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
  errorMessage: null,
}

const defaultState = {
  data: null,
  requestState: { ...initialRequestState },
}

export const PREFETCH_DATA_REQUESTED = 'PREFETCH_DATA_REQUESTED'
export const PREFETCH_DATA_SUCCEEDED = 'PREFETCH_DATA_SUCCEEDED'
export const PREFETCH_DATA_FAILED = 'PREFETCH_DATA_FAILED'

export const {
  prefetchDataRequested,
  prefetchDataFailed,
  prefetchDataSucceeded,
} = createActions(
  {},
  PREFETCH_DATA_REQUESTED,
  PREFETCH_DATA_SUCCEEDED,
  PREFETCH_DATA_FAILED
)

const reducers = handleActions(
  {
    [PREFETCH_DATA_FAILED]: state => ({
      ...state,
      requestState: {
        pending: false,
        success: false,
        failed: true,
      },
    }),

    [PREFETCH_DATA_REQUESTED]: state => ({
      ...state,

      requestState: {
        pending: true,
        success: false,
        failed: false,
        errorMessage: null,
      },
    }),

    [PREFETCH_DATA_SUCCEEDED]: (state, action) => {
      const { nextLaunch, latestLaunch, rockets, launchpads } = action.payload

      return {
        ...state,
        nextLaunch,
        latestLaunch,
        rockets,
        launchpads,
        requestState: {
          pending: false,
          success: true,
          failed: false,
          errorMessage: null,
        },
      }
    },
  },
  defaultState
)

export default reducers
