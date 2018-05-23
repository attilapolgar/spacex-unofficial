import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Game from './Game'

export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'React!',
    headerRight: (
      <Button
        title="💡"
        color="azure"
        onPress={() => navigation.navigate('About', { who: 'Attila' })}
      />
    )
  })
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Game />
      </View>
    )
  }
}
