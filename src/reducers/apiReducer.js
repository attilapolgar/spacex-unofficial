import {
  NEXT_LAUNCH_FETCH_SUCCEEDED,
  NEXT_LAUNCH_FETCH_REQUESTED,
  NEXT_LAUNCH_FETCH_FAILED,
  LATEST_LAUNCH_FETCH_FAILED,
  LATEST_LAUNCH_FETCH_REQUESTED,
  LATEST_LAUNCH_FETCH_SUCCEEDED
} from '../constants/action-types'

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
  errorMessage: null
}

const initialState = {
  nextLaunch: null,
  nextLaunchRequestState: { ...initialRequestState },
  latestLaunch: null,
  latestLaunchRequestState: { ...initialRequestState }
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_LAUNCH_FETCH_REQUESTED: {
      return {
        ...state,
        nextLaunchRequestState: {
          pending: true,
          success: false,
          failed: false,
          errorMessage: null
        }
      }
    }
    case NEXT_LAUNCH_FETCH_SUCCEEDED: {
      const { data } = action.payload

      return {
        ...state,
        nextLaunch: data,
        nextLaunchRequestState: {
          pending: false,
          success: true,
          failed: false,
          errorMessage: null
        }
      }
    }
    case NEXT_LAUNCH_FETCH_FAILED: {
      const { errorMessage } = action.payload
      return {
        ...state,
        nextLaunchRequestState: {
          pending: false,
          success: false,
          failed: true,
          errorMessage
        }
      }
    }
    case LATEST_LAUNCH_FETCH_REQUESTED: {
      return {
        ...state,
        latestLaunchRequestState: {
          pending: true,
          success: false,
          failed: false,
          errorMessage: null
        }
      }
    }
    case LATEST_LAUNCH_FETCH_SUCCEEDED: {
      const { data } = action.payload

      return {
        ...state,
        latestLaunch: data,
        latestLaunchRequestState: {
          pending: false,
          success: true,
          failed: false,
          errorMessage: null
        }
      }
    }
    case LATEST_LAUNCH_FETCH_FAILED: {
      const { errorMessage } = action.payload
      return {
        ...state,
        latestLaunchRequestState: {
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
