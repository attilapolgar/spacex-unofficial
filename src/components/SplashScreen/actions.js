import {
  PRELOAD_ASSETS_REQUESTED,
  PRELOAD_ASSETS_FAILED,
  PRELOAD_ASSETS_SUCCEEDED,
} from './action-types'

export const preloadAssetsRequested = () => ({
  type: PRELOAD_ASSETS_REQUESTED,
})

export const preloadAssetsFailed = payload => ({
  type: PRELOAD_ASSETS_FAILED,
  payload,
})

export const preloadAssetsSucceeded = payload => ({
  type: PRELOAD_ASSETS_SUCCEEDED,
  payload,
})
