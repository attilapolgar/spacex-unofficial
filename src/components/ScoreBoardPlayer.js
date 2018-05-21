import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'
import {} from '../actions'
import { connect } from 'react-redux'

class ScoreBoardPlayer extends Component {
  render() {
    return (
      <View style={styles.scoreBoardPlayer}>
        <Text style={styles.avatar}>{this.props.player.avatar}</Text>
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
  }
})

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardPlayer)
