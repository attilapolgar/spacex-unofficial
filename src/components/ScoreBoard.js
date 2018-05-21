import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

import ScoreBoardPlayer from './ScoreBoardPlayer'

class ScoreBoard extends Component {
  render() {
    return (
      <View style={styles.scoreBoard}>
        <ScoreBoardPlayer player={this.props.player} />
        <View>
          <Text>{this.props.avgReactionTime}</Text>
        </View>
        <View style={styles.times}>
          {this.props.rounds.map(round => (
            <View key={round.id}>
              {round.playerReacted ? (
                round.goodReaction ? (
                  <Text>
                    {`${round.id === 0 ? '' : ' | '}${round.reactionTime}`}
                  </Text>
                ) : (
                  <Text>{`${round.id === 0 ? '' : ' | '}X`}</Text>
                )
              ) : (
                false
              )}
            </View>
          ))}
        </View>
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
