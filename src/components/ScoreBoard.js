import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import ScoreBoardPlayer from './ScoreBoardPlayer'

class ScoreBoard extends Component {
  render () {
    return (
      <View style={styles.scoreBoard}>
        {this.props.players.map(player => (
          <ScoreBoardPlayer player={player} key={player.id} />
        ))}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scoreBoard: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  players: state.players
})

export default connect(mapStateToProps)(ScoreBoard)
