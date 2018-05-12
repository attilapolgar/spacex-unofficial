import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Blink from './src/components/Blink'

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Blink text='blink!' />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
