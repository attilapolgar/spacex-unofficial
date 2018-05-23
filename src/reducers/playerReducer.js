import { PLAYER_READY } from '../constants/action-types'

const initialState = {
  id: 'p1',
  score: 0,
  avatar: '⏲️'
}

export default function playerReducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}
