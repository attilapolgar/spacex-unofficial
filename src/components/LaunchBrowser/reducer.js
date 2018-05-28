import {
  LAUNCH_DATA_FETCH_FAILED,
  LAUNCH_DATA_FETCH_SUCCEEDED,
  LAUNCH_DATA_FETCH_REQUESTED,
  SELECT_NEXT_LAUNCH,
  SELECT_PREV_LAUNCH,
  SELECT_LAUNCH,
  FILTER_FOR_LAUNCH_STATUS,
  FILTER_FOR_ROCKET
} from './action-types'

import { PREFETCH_DATA_SUCCEEDED } from '../../action-types'

const filterForLaunchStatus = (data, status) =>
  data.filter(launch => {
    if (status === 'all') return launch
    if (status === 'success') return launch.launch_success === true
    if (status === 'failed') return launch.launch_success === false
  })

const filterForRocket = (data, rocketId) =>
  data.filter(launch => {
    if (rocketId === 'all') return launch
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
  isFilterActive: false,
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
      return {
        ...state,
        isFilterActive: state.rocketFilter !== 'all' || status !== 'all',
        filteredData: filterForLaunchStatus(state.filteredData, status)
      }
    }
    case FILTER_FOR_ROCKET: {
      const { rocketId } = action.payload
      return {
        ...state,
        isFilterActive:
          state.launchStatusFilter !== 'all' || rocketId !== 'all',
        rocketFilter: rocketId,
        filteredData: filterForRocket(state.filteredData, rocketId)
      }
    }
    default:
      return state
  }
}
