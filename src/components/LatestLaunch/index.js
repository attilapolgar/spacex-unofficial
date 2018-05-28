import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ScrollView } from 'react-native'

import LaunchView from '@components/LaunchView'

class LatestLaunch extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Latest mission`
  })

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

export default connect(mapStateToProps)(LatestLaunch)
