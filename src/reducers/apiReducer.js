import {
  NEXT_LAUNCH_FETCH_SUCCEEDED,
  NEXT_LAUNCH_FETCH_REQUESTED,
  NEXT_LAUNCH_FETCH_FAILED
} from '../constants/action-types'

const initialState = {
  latestLaunch: null,
  nextLaunch: null,
  success: false,
  pending: false,
  failed: false,
  errorMessage: null
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_LAUNCH_FETCH_REQUESTED: {
      return {
        ...state,
        pending: true,
        success: false,
        failed: false,
        errorMessage: null
      }
    }
    case NEXT_LAUNCH_FETCH_SUCCEEDED: {
      const { data } = action.payload

      return {
        ...state,
        nextLaunch: data,
        pending: false,
        success: true,
        failed: false,
        errorMessage: null
      }
    }
    case NEXT_LAUNCH_FETCH_FAILED: {
      const { errorMessage } = action.payload
      return {
        ...state,
        pending: false,
        success: false,
        failed: true,
        errorMessage
      }
    }
    default:
      return state
  }
}
