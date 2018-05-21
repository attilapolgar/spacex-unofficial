import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import { playerReady, startWhenPlayersReady } from '../actions'
import { connect } from 'react-redux'

class ScoreBoardPlayer extends Component {
  onPlayerReady = () => {
    this.props.playerReady({ playerId: this.props.player.id })
    this.props.startWhenPlayersReady()
  }
  render() {
    return (
      <View style={styles.scoreBoardPlayer}>
        <Text style={styles.avatar}>{this.props.player.avatar}</Text>
        {this.props.player.ready ? (
          <Text style={styles.score}>{this.props.player.score}</Text>
        ) : (
          <Button
            style={styles.readyButton}
            title="ready"
            onPress={this.onPlayerReady}
          />
        )}
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
  playerReady: payload => dispatch(playerReady(payload)),
  startWhenPlayersReady: () => dispatch(startWhenPlayersReady())
})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardPlayer)
