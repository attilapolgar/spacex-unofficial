import {
  PREFETCH_DATA_FAILED,
  PREFETCH_DATA_REQUESTED,
  PREFETCH_DATA_SUCCEEDED
} from '../action-types'

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
  errorMessage: null
}

const initialState = {
  data: null,
  requestState: { ...initialRequestState }
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case PREFETCH_DATA_REQUESTED: {
      return {
        ...state,
        requestState: {
          pending: true,
          success: false,
          failed: false,
          errorMessage: null
        }
      }
    }
    case PREFETCH_DATA_SUCCEEDED: {
      const { nextLaunch, latestLaunch } = action.payload

      return {
        ...state,
        nextLaunch,
        latestLaunch,
        requestState: {
          pending: false,
          success: true,
          failed: false,
          errorMessage: null
        }
      }
    }
    case PREFETCH_DATA_FAILED: {
      return {
        ...state,
        requestState: {
          pending: false,
          success: false,
          failed: true,
          errorMessage
        }
      }
    }
    default:
      return state
  }
}
