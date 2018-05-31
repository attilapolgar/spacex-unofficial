import {
  PRELOAD_ASSETS_FAILED,
  PRELOAD_ASSETS_REQUESTED,
  PRELOAD_ASSETS_SUCCEEDED
} from './action-types'

const initialRequestState = {
  success: false,
  pending: false,
  failed: false
}

const initialState = {
  data: null,
  preloadState: { ...initialRequestState }
}

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case PRELOAD_ASSETS_REQUESTED: {
      return {
        ...state,
        preloadState: {
          pending: true,
          success: false,
          failed: false
        }
      }
    }
    case PRELOAD_ASSETS_SUCCEEDED: {
      return {
        ...state,
        preloadState: {
          pending: false,
          success: true,
          failed: false,
          errorMessage: null
        }
      }
    }
    case PRELOAD_ASSETS_FAILED: {
      return {
        ...state,
        preloadState: {
          pending: false,
          success: false,
          failed: true
        }
      }
    }
    default:
      return state
  }
}
