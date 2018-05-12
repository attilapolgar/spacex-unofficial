import React, { Component } from 'react'
import { Text, View, Button } from 'react-native'
import Blink from './Blink'
export default class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    drawerLabel: 'Home',
    headerRight: (
      <Button
        title='💡'
        color='azure'
        onPress={() => navigation.navigate('About', { who: 'Attila' })}
      />
    )
  })
  render () {
    return (
      <View style={{ flex: 1 }}>
        <Blink />
      </View>
    )
  }
}
