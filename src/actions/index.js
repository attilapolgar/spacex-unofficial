import {
  PREFETCH_DATA_FAILED,
  PREFETCH_DATA_REQUESTED,
  PREFETCH_DATA_SUCCEEDED,
  PRELOAD_ASSETS_REQUESTED,
  PRELOAD_ASSETS_FAILED,
  PRELOAD_ASSETS_SUCCEEDED
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

export const preloadAssetsRequested = () => ({
  type: PRELOAD_ASSETS_REQUESTED
})

export const preloadAssetsFailed = payload => ({
  type: PRELOAD_ASSETS_FAILED,
  payload
})

export const preloadAssetsSucceeded = payload => ({
  type: PRELOAD_ASSETS_SUCCEEDED,
  payload
})
