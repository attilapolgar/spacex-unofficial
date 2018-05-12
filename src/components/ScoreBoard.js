import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

class ScoreBoard extends Component {
  render () {
    return (
      <View style={styles.scoreBoard}>
        {this.props.players.map(player => (
          <Text key={player.id}>
            {player.name}: {player.score}
          </Text>
        ))}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scoreBoard: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const mapStateToProps = state => ({
  players: state.players
})

export default connect(mapStateToProps)(ScoreBoard)
