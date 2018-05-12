import { END_ROUND, SCORED } from '../constants/action-types'

export const endRound = () => ({
  type: END_ROUND
})

export const scored = payload => ({
  type: SCORED,
  payload
})
