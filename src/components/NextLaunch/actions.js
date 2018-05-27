import {
  NEXT_LAUNCH_FETCH_REQUESTED,
  NEXT_LAUNCH_FETCH_FAILED,
  NEXT_LAUNCH_FETCH_SUCCEEDED
} from './action-types'

export const nextLaunchFetchRequested = () => ({
  type: NEXT_LAUNCH_FETCH_REQUESTED
})

export const nextLaunchFetchFailed = payload => ({
  type: NEXT_LAUNCH_FETCH_FAILED,
  payload
})

export const nextLaunchFetchSucceeded = payload => ({
  type: NEXT_LAUNCH_FETCH_SUCCEEDED,
  payload
})
