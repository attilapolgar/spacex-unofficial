import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

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

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(NextLaunch)
