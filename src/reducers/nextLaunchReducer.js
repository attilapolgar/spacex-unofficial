import {
  NEXT_LAUNCH_FETCH_SUCCEEDED,
  NEXT_LAUNCH_FETCH_REQUESTED,
  NEXT_LAUNCH_FETCH_FAILED
} from '../constants/action-types'

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

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_LAUNCH_FETCH_REQUESTED: {
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
    case NEXT_LAUNCH_FETCH_SUCCEEDED: {
      const { data } = action.payload

      return {
        ...state,
        data,
        requestState: {
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
