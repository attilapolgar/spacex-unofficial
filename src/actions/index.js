import { randomIntegerInRange } from '../utils'
import {
  NEXT_LAUNCH_FETCH_REQUESTED,
  NEXT_LAUNCH_FETCH_SUCCEEDED,
  NEXT_LAUNCH_FETCH_FAILED,
  LATEST_LAUNCH_FETCH_FAILED,
  LATEST_LAUNCH_FETCH_REQUESTED,
  LATEST_LAUNCH_FETCH_SUCCEEDED
} from '../constants/action-types'

export const nextLaunchFetchRequested = payload => ({
  type: NEXT_LAUNCH_FETCH_REQUESTED,
  payload
})
export const nextLaunchFetchSuceeded = payload => ({
  type: NEXT_LAUNCH_FETCH_SUCCEEDED,
  payload
})

export const nextLaunchFetchFailed = payload => ({
  type: NEXT_LAUNCH_FETCH_FAILED,
  payload
})
export const latestLaunchFetchRequested = payload => ({
  type: LATEST_LAUNCH_FETCH_REQUESTED,
  payload
})
export const latestLaunchFetchSuceeded = payload => ({
  type: LATEST_LAUNCH_FETCH_SUCCEEDED,
  payload
})

export const latestLaunchFetchFailed = payload => ({
  type: LATEST_LAUNCH_FETCH_FAILED,
  payload
})
