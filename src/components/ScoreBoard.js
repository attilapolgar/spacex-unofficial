import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import ScoreBoardPlayer from './ScoreBoardPlayer'
import ScoreBoardResult from './ScoreBoardResult'

class ScoreBoard extends Component {
  render() {
    return (
      <View style={styles.scoreBoard}>
        <ScoreBoardPlayer player={this.props.player} />
        <ScoreBoardResult rounds={this.props.rounds} />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scoreBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  times: {
    flexDirection: 'row'
  }
})

const mapStateToProps = state => ({
  player: state.player,
  rounds: state.game.rounds,
  avgReactionTime: state.game.avgReactionTime
})

export default connect(mapStateToProps)(ScoreBoard)
