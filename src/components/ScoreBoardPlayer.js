import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { connect } from 'react-redux'

const ScoreBoardPlayer = ({ player }) => (
  <View style={styles.scoreBoardPlayer}>
    <Text style={styles.avatar}>{player.avatar}</Text>
  </View>
)

const styles = StyleSheet.create({
  scoreBoardPlayer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    fontSize: 100
  }
})

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardPlayer)
