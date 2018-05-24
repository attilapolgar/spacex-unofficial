import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

import stopwatchImage from '../assets/img/stopwatch.png'

const ScoreBoardPlayer = ({ player }) => (
  <View style={styles.scoreBoardPlayer}>
    <Image style={styles.image} source={stopwatchImage} />
  </View>
)

const styles = StyleSheet.create({
  scoreBoardPlayer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: 150,
    height: 150
  }
})

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ScoreBoardPlayer)
