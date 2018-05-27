import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View } from 'react-native'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'
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

import {
  nextLaunchFetchRequested,
  launchDataFetchRequested,
  selectNextLaunch,
  selectPrevLaunch
} from './actions'

class LaunchBrowser extends Component {
  static navigationOptions = {
    title: 'Launch browser'
  }

  componentWillMount = () => {}

  onSwipeLeft(gestureState) {
    this.props.selectPrevLaunch()
  }

  onSwipeRight(gestureState) {
    this.props.selectNextLaunch()
  }

  render() {
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    }
    return (
      <GestureRecognizer
        onSwipeLeft={state => this.onSwipeLeft(state)}
        onSwipeRight={state => this.onSwipeRight(state)}
        config={config}
        style={{ flex: 1 }}
      >
        <RefreshableScrollView
          updateMethod={this.props.fetchLaunchData}
          requestState={this.props.requestState}
        >
          {this.props.requestState.success && (
            <LaunchView data={this.props.selectedLaunch} />
          )}
        </RefreshableScrollView>
      </GestureRecognizer>
    )
  }
}

const mapStateToProps = state => ({
  data: state.launchBrowser.data,
  selectedLaunch: state.launchBrowser.selectedLaunch,
  requestState: state.launchBrowser.requestState
})

const mapDispatchToProps = dispatch => ({
  fetchNextLaunch: () => dispatch(nextLaunchFetchRequested()),
  fetchLaunchData: () => dispatch(launchDataFetchRequested()),
  selectNextLaunch: () => dispatch(selectNextLaunch()),
  selectPrevLaunch: () => dispatch(selectPrevLaunch())
})

export default connect(mapStateToProps, mapDispatchToProps)(LaunchBrowser)
