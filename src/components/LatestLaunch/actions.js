import {
  LATEST_LAUNCH_FETCH_REQUESTED,
  LATEST_LAUNCH_FETCH_FAILED,
  LATEST_LAUNCH_FETCH_SUCCEEDED
} from './action-types'

export const latestLaunchFetchRequested = () => ({
  type: LATEST_LAUNCH_FETCH_REQUESTED
})

export const latestLaunchFetchFailed = payload => ({
  type: LATEST_LAUNCH_FETCH_FAILED,
  payload
})

export const latestLaunchFetchSucceeded = payload => ({
  type: LATEST_LAUNCH_FETCH_SUCCEEDED,
  payload
})
