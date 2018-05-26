import React, { Component } from 'react'
import {
  nextLaunchFetchRequested,
  launchDataFetchRequested,
  selectNextLaunch,
  selectPrevLaunch
} from '../../actions'
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
import LaunchView from '../LaunchView'
import RefreshableScrollView from '../RefreshableScrollView'
import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures'

class NextLaunchScreen extends Component {
  static navigationOptions = {
    title: 'Next launch'
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
  data: state.launches.data,
  selectedLaunch: state.launches.selectedLaunch,
  requestState: state.launches.requestState
})

const mapDispatchToProps = dispatch => ({
  fetchNextLaunch: () => dispatch(nextLaunchFetchRequested()),
  fetchLaunchData: () => dispatch(launchDataFetchRequested()),
  selectNextLaunch: () => dispatch(selectNextLaunch()),
  selectPrevLaunch: () => dispatch(selectPrevLaunch())
})

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunchScreen)
