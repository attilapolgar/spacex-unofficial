import {
  PREFETCH_DATA_FAILED,
  PREFETCH_DATA_REQUESTED,
  PREFETCH_DATA_SUCCEEDED
} from '../action-types'

export const prefetchDataRequested = () => ({
  type: PREFETCH_DATA_REQUESTED
})

export const prefetchDataFailed = payload => ({
  type: PREFETCH_DATA_FAILED,
  payload
})

export const prefetchDataSucceeded = payload => ({
  type: PREFETCH_DATA_SUCCEEDED,
  payload
})
