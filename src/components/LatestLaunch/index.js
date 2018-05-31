import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import LaunchView from '@components/LaunchView'

class LatestLaunch extends Component {
  static navigationOptions = {
    title: `Latest mission`
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

LatestLaunch.propTypes = {
  data: PropTypes.obj
}

export default connect(mapStateToProps)(LatestLaunch)
