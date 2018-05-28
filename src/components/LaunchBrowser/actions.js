import { randomIntegerInRange } from '@common/utils'
import {
  LAUNCH_DATA_FETCH_REQUESTED,
  LAUNCH_DATA_FETCH_SUCCEEDED,
  LAUNCH_DATA_FETCH_FAILED,
  FILTER_FOR_LAUNCH_STATUS,
  FILTER_FOR_ROCKET
} from './action-types'

export const launchDataFetchRequested = () => ({
  type: LAUNCH_DATA_FETCH_REQUESTED
})

export const launchDataFetchFailed = payload => ({
  type: LAUNCH_DATA_FETCH_FAILED,
  payload
})

export const launchDataFetchSucceeded = payload => ({
  type: LAUNCH_DATA_FETCH_SUCCEEDED,
  payload
})

export const selectNextLaunch = () => ({
  type: SELECT_NEXT_LAUNCH
})
export const selectLaunch = payload => ({ type: SELECT_LAUNCH, payload })

export const selectPrevLaunch = () => ({
  type: SELECT_PREV_LAUNCH
})
export const filterForLaunchStatus = payload => ({
  type: FILTER_FOR_LAUNCH_STATUS,
  payload
})
export const filterForRocket = payload => ({
  type: FILTER_FOR_ROCKET,
  payload
})
