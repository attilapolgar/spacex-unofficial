import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import {
  DeckSwiper,
  Card,
  CardItem,
  Left,
  Body,
  Container,
  Header
} from 'native-base'

import LaunchView from '@components/LaunchView'
import RefreshableScrollView from '@components/RefreshableScrollView'

import { nextLaunchFetchRequested } from './actions'

class NextLaunch extends Component {
  static navigationOptions = {
    title: 'Next launch'
  }

  render() {
    return (
      <RefreshableScrollView
        updateMethod={this.props.fetchNextLaunch}
        requestState={this.props.requestState}
        initialUpdate={!this.props.data}
      >
        <LaunchView data={this.props.data} />
      </RefreshableScrollView>
    )
  }
}

const mapStateToProps = state => ({
  data: state.nextLaunch.data,
  requestState: state.nextLaunch.requestState
})

const mapDispatchToProps = dispatch => ({
  fetchNextLaunch: () => dispatch(nextLaunchFetchRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunch)
