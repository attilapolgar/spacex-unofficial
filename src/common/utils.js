import { delay } from 'redux-saga'
import { call } from 'redux-saga/effects'

export const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const average = (...nums) => {
  return [...nums].reduce((acc, val) => acc + val, 0) / nums.length
}

export const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)

export function* repeatedRequest(
  request,
  { retry = 5, retryDelay = 500 } = {}
) {
  for (let i = 0; i < retry; i++) {
    try {
      return yield call(request)
    } catch (err) {
      if (i < retry - 1) {
        yield call(delay, retryDelay)
      }
    }
  }
  throw new Error('API request failed')
}
