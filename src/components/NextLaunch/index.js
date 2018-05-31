import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'
import PropTypes from 'prop-types'

import LaunchView from '@components/LaunchView'

class NextLaunch extends Component {
  static navigationOptions = {
    title: `Next mission`
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
  data: state.data.nextLaunch
})

NextLaunch.propTypes = {
  data: PropTypes.object
}

export default connect(mapStateToProps)(NextLaunch)
