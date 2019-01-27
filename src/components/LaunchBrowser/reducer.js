import { createActions, handleActions } from 'redux-actions'

import { PREFETCH_DATA_SUCCEEDED } from '../../reducers/dataReducer'

const initialRequestState = {
  success: false,
  pending: false,
  failed: false,
  errorMessage: null,
}

const defaultState = {
  launches: null,
  filteredData: null,
  launchStatusFilter: 'all',
  rocketFilter: 'all',
  selectedLaunch: null,
  requestState: { ...initialRequestState },
}

export const LAUNCH_DATA_FETCH_REQUESTED = 'LAUNCH_DATA_FETCH_REQUESTED'
export const LAUNCH_DATA_FETCH_SUCCEEDED = 'LAUNCH_DATA_FETCH_SUCCEEDED'
export const LAUNCH_DATA_FETCH_FAILED = 'LAUNCH_DATA_FETCH_FAILED'
export const FILTER_FOR_LAUNCH_STATUS = 'FILTER_FOR_LAUNCH_STATUS'
export const FILTER_FOR_ROCKET = 'FILTER_FOR_ROCKET'

export const {
  launchDataFetchRequested,
  launchDataFetchFailed,
  launchDataFetchSucceeded,
  filterForLaunchStatus,
  filterForRocket,
} = createActions(
  {},
  LAUNCH_DATA_FETCH_REQUESTED,
  LAUNCH_DATA_FETCH_SUCCEEDED,
  LAUNCH_DATA_FETCH_FAILED,
  FILTER_FOR_LAUNCH_STATUS,
  FILTER_FOR_ROCKET
)

const filterForLaunchStatus_ = (data, status) =>
  data.filter(launch => {
    if (status === 'all') return true
    if (status === 'success') return launch.launch_success === true
    if (status === 'failed') return launch.launch_success === false
  })

const filterForRocket_ = (data, rocketId) =>
  data.filter(launch => {
    if (rocketId === 'all') return true
    return launch.rocket.rocket_id === rocketId
  })

const reducers = handleActions(
  {
    [LAUNCH_DATA_FETCH_REQUESTED]: (state, action) => ({
      ...state,
      requestState: {
        pending: true,
        success: false,
        failed: false,
        errorMessage: null,
      },
    }),
    [PREFETCH_DATA_SUCCEEDED]: (state, action) => {
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
          errorMessage: null,
        },
      }
    },
    [FILTER_FOR_LAUNCH_STATUS]: (state, action) => {
      const { status } = action.payload
      const fd = filterForRocket_(state.launches, state.rocketFilter)
      return {
        ...state,
        launchStatusFilter: status,
        filteredData: filterForLaunchStatus_(fd, status),
      }
    },
    [FILTER_FOR_ROCKET]: (state, action) => {
      const { rocketId } = action.payload
      const fd = filterForLaunchStatus_(
        state.launches,
        state.launchStatusFilter
      )
      return {
        ...state,
        rocketFilter: rocketId,
        filteredData: filterForRocket_(fd, rocketId),
      }
    },
  },
  defaultState
)

export default reducers
