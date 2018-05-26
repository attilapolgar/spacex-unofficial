import React, { Component } from 'react'
import { nextLaunchFetchRequested } from '../../actions'
import { connect } from 'react-redux'

import LaunchView from '../LaunchView'

import RefreshableScrollView from '../RefreshableScrollView'
class NextLaunchScreen extends Component {
  static navigationOptions = {
    title: 'Next launch'
  }

  render() {
    return (
      <RefreshableScrollView
        updateMethod={this.props.fetchNextLaunch}
        requestState={this.props.requestState}
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

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunchScreen)
