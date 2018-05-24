import React from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

import ScoreBoardPlayer from './ScoreBoardPlayer'
import ScoreBoardResult from './ScoreBoardResult'

const ScoreBoard = ({ player, rounds }) => (
  <View style={styles.scoreBoard}>
    <ScoreBoardPlayer player={player} />
    <ScoreBoardResult rounds={rounds} />
  </View>
)

const styles = StyleSheet.create({
  scoreBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  player: state.player,
  rounds: state.game.rounds
})

export default connect(mapStateToProps)(ScoreBoard)
