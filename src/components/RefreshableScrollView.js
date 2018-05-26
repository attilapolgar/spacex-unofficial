import React, { Component } from 'react'
import { Text, ScrollView, RefreshControl } from 'react-native'

class RefreshableScrollView extends Component {
  constructor(props) {
    super(props)
  }

  updateData = () => {
    this.props.updateMethod()
  }

  componentWillMount = () => {
    this.updateData()
  }

  render() {
    const { success, pending, failed } = this.props.requestState
    return (
      <ScrollView
        style={{ flex: 1 }}
        refreshControl={
          <RefreshControl refreshing={pending} onRefresh={this.updateData} />
        }
      >
        {!pending && success && this.props.children}
        {!pending && failed && <Text>Update failed</Text>}
      </ScrollView>
    )
  }
}

export default RefreshableScrollView
