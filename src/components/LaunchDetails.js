import React, { Component } from 'react'
import { StyleSheet, ScrollView } from 'react-native'

import LaunchView from '@components/LaunchView'

class LaunchDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    const data = navigation.getParam('data')
    return { title: `Mission: ${data.mission_name}` }
  }

  render() {
    const { navigation } = this.props
    const data = navigation.getParam('data')
    return (
      <ScrollView>
        <LaunchView data={data} />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({})

export default LaunchDetails
