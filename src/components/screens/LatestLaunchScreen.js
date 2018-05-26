import React, { Component } from 'react'
import { latestLaunchFetchRequested } from '../../actions'
import { connect } from 'react-redux'

import LaunchView from '../LaunchView'

import RefreshableScrollView from '../RefreshableScrollView'
class LatestLaunchScreen extends Component {
  static navigationOptions = {
    title: 'Latest launch'
  }

  render() {
    return (
      <RefreshableScrollView
        updateMethod={this.props.fetchLaunch}
        requestState={this.props.requestState}
      >
        <LaunchView data={this.props.data} />
      </RefreshableScrollView>
    )
  }
}

const mapStateToProps = state => ({
  data: state.api.latestLaunch,
  requestState: state.api.latestLaunchRequestState
})

const mapDispatchToProps = dispatch => ({
  fetchLaunch: () => dispatch(latestLaunchFetchRequested())
})

export default connect(mapStateToProps, mapDispatchToProps)(LatestLaunchScreen)
