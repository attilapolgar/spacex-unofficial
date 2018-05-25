import { randomIntegerInRange } from '../utils'
import {
  NEXT_LAUNCH_FETCH_REQUESTED,
  NEXT_LAUNCH_FETCH_SUCCEEDED,
  NEXT_LAUNCH_FETCH_FAILED
} from '../constants/action-types'

export const fetchNextLaunchFetchRequested = payload => ({
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
