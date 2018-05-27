import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, StyleSheet, ScrollView } from 'react-native'

import LaunchView from '@components/LaunchView'

class LaunchDetails extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: false }
  }
  render() {
    const data = this.props.data.find(
      l => l.flight_number === this.props.selectedLaunchId
    )
    return (
      <ScrollView>
        <LaunchView data={data} />
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({})

const mapStateToProps = state => ({
  data: state.launchBrowser.data,
  selectedLaunchId: state.launchBrowser.selectedLaunchId
})

export default connect(mapStateToProps)(LaunchDetails)
