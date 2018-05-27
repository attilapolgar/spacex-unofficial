import {
  LAUNCH_DATA_FETCH_FAILED,
  LAUNCH_DATA_FETCH_SUCCEEDED,
  LAUNCH_DATA_FETCH_REQUESTED,
  SELECT_NEXT_LAUNCH,
  SELECT_PREV_LAUNCH,
  SELECT_LAUNCH,
  FILTER_FOR_LAUNCH_STATUS
} from './action-types'

const filterForLaunchStatus = (data, status) =>
  data.filter(launch => {
    if (status === 'all') return launch
    if (status === 'success') return launch.launch_success === true
    if (status === 'failed') return launch.launch_success === false
  })

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
  errorMessage: null
}

const initialState = {
  data: null,
  filteredData: null,
  launchStatusFilter: 'all',
  selectedLaunch: null,
  requestState: { ...initialRequestState }
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case LAUNCH_DATA_FETCH_REQUESTED: {
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
    case LAUNCH_DATA_FETCH_SUCCEEDED: {
      const { data } = action.payload
      const sortedData = data.sort((a, b) => b.flight_number - a.flight_number)

      return {
        ...state,
        data: sortedData,
        filteredData: filterForLaunchStatus(data, state.launchStatusFilter),
        selectedLaunch: data[0],
        requestState: {
          pending: false,
          success: true,
          failed: false,
          errorMessage: null
        }
      }
    }
    case LAUNCH_DATA_FETCH_FAILED: {
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
    case SELECT_NEXT_LAUNCH: {
      return {
        ...state,
        selectedLaunch: state.data.find(
          launch =>
            launch.flight_number ===
            (state.selectedLaunch.flight_number === state.data.length
              ? 1
              : state.selectedLaunch.flight_number + 1)
        )
      }
    }
    case SELECT_LAUNCH: {
      const { id } = action.payload
      return {
        ...state,
        selectedLaunchId: id
      }
    }
    case SELECT_PREV_LAUNCH: {
      return {
        ...state,
        selectedLaunch: state.data.find(
          launch =>
            launch.flight_number ===
            (state.selectedLaunch.flight_number === 1
              ? state.data.length
              : state.selectedLaunch.flight_number - 1)
        )
      }
    }
    case FILTER_FOR_LAUNCH_STATUS: {
      const { status } = action.payload
      return {
        ...state,
        launchStatusFilter: status,
        filteredData: filterForLaunchStatus(state.data, status)
      }
    }
    default:
      return state
  }
}
