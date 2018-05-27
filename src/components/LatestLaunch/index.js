import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import { Card, CardItem, Left, Body, Container, Header } from 'native-base'

import LaunchView from '@components/LaunchView'
import RefreshableScrollView from '@components/RefreshableScrollView'

import { latestLaunchFetchRequested } from './actions'

class LatestLaunch extends Component {
  static navigationOptions = {
    title: 'Latest launch'
  }

  render() {
    return (
      <RefreshableScrollView
        updateMethod={this.props.fetchLaunch}
        requestState={this.props.requestState}
        initialUpdate={!this.props.data}
      >
        <LaunchView data={this.props.data} />
      </RefreshableScrollView>
    )
  }
}

const mapStateToProps = state => ({
  data: state.latestLaunch.data,
  requestState: state.latestLaunch.requestState
})

const mapDispatchToProps = dispatch => ({
  fetchLaunch: () => dispatch(latestLaunchFetchRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(LatestLaunch)
