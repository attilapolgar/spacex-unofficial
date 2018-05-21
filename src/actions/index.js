import {
  END_ROUND,
  SCORED,
  PLAYER_READY,
  START_GAME,
  START_WHEN_PLAYERS_READY
} from '../constants/action-types'

export const endRound = () => ({
  type: END_ROUND
})

export const scored = payload => ({
  type: SCORED,
  payload
})

export const playerReady = payload => ({
  type: PLAYER_READY,
  payload
})

export const startGame = () => ({ type: START_GAME })

export const startWhenPlayersReady = () => (dispatch, getState) => {
  const { players } = getState()

  const allPlayersReady = players.reduce((acc, { ready }) => acc && ready, true)
  if (allPlayersReady) {
    dispatch(startGame())
  }
}
