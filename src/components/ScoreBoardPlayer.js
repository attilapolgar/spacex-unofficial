import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { playerReady } from '../actions'
import { connect } from 'react-redux'

class ScoreBoardPlayer extends Component {
  render () {
    return (
      <View style={styles.scoreBoardPlayer}>
        <Text style={styles.avatar}>{this.props.player.avatar}</Text>
        <Text style={styles.name}>{this.props.player.name}</Text>
        {this.props.player.ready
          ? <Text style={styles.score}>{this.props.player.score}</Text>
          : <Button
            style={styles.readyButton}
            title='ready'
            onPress={() =>
                this.props.playerReady({ playerId: this.props.player.id })}
            />}
      </View>
    )
  }
}
const styles = StyleSheet.create({
  scoreBoardPlayer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontWeight: 'bold',
    fontSize: 15
  },
  score: {
    marginTop: 10,
    fontSize: 40,
    height: 50
  },
  avatar: {
    fontSize: 50
  },
  readyButton: {
    marginTop: 10,
    height: 50
  }
})

const mapDispatchToProps = dispatch => ({
  playerReady: payload => dispatch(playerReady(payload))
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardPlayer)
