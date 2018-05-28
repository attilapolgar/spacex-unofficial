import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, ScrollView } from 'react-native'
import { Card, CardItem, Left, Body, Container, Header } from 'native-base'

import LaunchView from '@components/LaunchView'

class LatestLaunch extends Component {
  static navigationOptions = {
    title: 'Latest launch'
  }

  render() {
    return (
      <ScrollView style={{ flex: 1 }}>
        <LaunchView data={this.props.data} />
      </ScrollView>
    )
  }
}

const mapStateToProps = state => ({
  data: state.data.latestLaunch
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(LatestLaunch)
