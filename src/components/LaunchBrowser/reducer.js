import {
  LAUNCH_DATA_FETCH_REQUESTED,
  FILTER_FOR_LAUNCH_STATUS,
  FILTER_FOR_ROCKET
} from './action-types'

import { PREFETCH_DATA_SUCCEEDED } from '../../action-types'

const filterForLaunchStatus = (data, status) =>
  data.filter(launch => {
    if (status === 'all') return true
    if (status === 'success') return launch.launch_success === true
    if (status === 'failed') return launch.launch_success === false
  })

const filterForRocket = (data, rocketId) =>
  data.filter(launch => {
    if (rocketId === 'all') return true
    return launch.rocket.rocket_id === rocketId
  })

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
  errorMessage: null
}

const initialState = {
  launches: null,
  filteredData: null,
  launchStatusFilter: 'all',
  rocketFilter: 'all',
  selectedLaunch: null,
  requestState: { ...initialRequestState }
}

export default function launchReducer(state = initialState, action) {
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
    case PREFETCH_DATA_SUCCEEDED: {
      let { launches } = action.payload

      let sortedData = launches.sort(
        (a, b) => b.flight_number - a.flight_number
      )

      return {
        ...state,
        launches: sortedData,
        filteredData: sortedData,
        selectedLaunch: launches[0],
        requestState: {
          pending: false,
          success: true,
          failed: false,
          errorMessage: null
        }
      }
    }

    case FILTER_FOR_LAUNCH_STATUS: {
      const { status } = action.payload
      const fd = filterForRocket(state.launches, state.rocketFilter)
      return {
        ...state,
        launchStatusFilter: status,
        filteredData: filterForLaunchStatus(fd, status)
      }
    }

    case FILTER_FOR_ROCKET: {
      const { rocketId } = action.payload
      const fd = filterForLaunchStatus(state.launches, state.launchStatusFilter)
      return {
        ...state,
        rocketFilter: rocketId,
        filteredData: filterForRocket(fd, rocketId)
      }
    }
    default:
      return state
  }
}
