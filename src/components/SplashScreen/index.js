import React, { Component } from 'react'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'
import PropTypes from 'prop-types'

import { prefetchDataRequested } from '../../reducers/dataReducer'
import { preloadAssetsRequested } from './reducer'

class SplashScreen extends Component {
  componentDidMount = () => {
    this.props.fetchData()
    this.props.preloadAssets()
  }

  componentDidUpdate = () => {
    this.props.requestState.success &&
      this.props.preloadState.success &&
      this.props.onFinish()
  }

  render() {
    return (
      <AppLoading
        startAsync={this._cacheResourcesAsync}
        onError={this.props.onError}
      />
    )
  }
}

const mapStateToProps = state => ({
  requestState: state.data.requestState,
  preloadState: state.preload.preloadState,
})

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(prefetchDataRequested()),
  preloadAssets: () => dispatch(preloadAssetsRequested()),
})

SplashScreen.propTypes = {
  requestState: PropTypes.object.isRequired,
  preloadState: PropTypes.object.isRequired,
  fetchData: PropTypes.func.isRequired,
  onFinish: PropTypes.func.isRequired,
  preloadAssets: PropTypes.func.isRequired,
  onError: PropTypes.func.isRequired,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen)
