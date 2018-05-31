import React, { Component } from 'react'
import { Text, ScrollView } from 'react-native'

export default class AboutScreen extends Component {
  render() {
    return (
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Text>coming soon...</Text>
      </ScrollView>
    )
  }
}
