import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { Form, Picker } from 'native-base'

import { filterForLaunchStatus, filterForRocket } from './actions'

class LaunchFilter extends Component {
  onStatusChange = status => {
    this.props.filterForLaunchStatus({ status })
  }
  onRocketChange = rocketId => {
    this.props.filterForRocket({ rocketId })
  }

  render() {
    return (
      <Form>
        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          selectedValue={this.props.launchStatusFilter}
          onValueChange={this.onStatusChange}
        >
          <Picker.Item label="All launches" value="all" />
          <Picker.Item label="Success only" value="success" />
          <Picker.Item label="Failed only" value="failed" />
        </Picker>

        <Picker
          mode="dropdown"
          style={{ width: undefined }}
          selectedValue={this.props.rocketFilter}
          onValueChange={this.onRocketChange}
        >
          <Picker.Item label="All rockets" value="all" />
          <Picker.Item label="Falcon 1" value="falcon1" />
          <Picker.Item label="Falcon 9" value="falcon9" />
          <Picker.Item label="Falcon Heavy" value="falconheavy" />
        </Picker>
      </Form>
    )
  }
}

const mapStateToProps = state => ({
  launchStatusFilter: state.launchBrowser.launchStatusFilter,
  rocketFilter: state.launchBrowser.rocketFilter
})

const mapDispatchToProps = dispatch => ({
  filterForLaunchStatus: payload => dispatch(filterForLaunchStatus(payload)),
  filterForRocket: payload => dispatch(filterForRocket(payload))
})

LaunchFilter.propTypes = {
  launchStatusFilter: PropTypes.string,
  rocketFilter: PropTypes.string,
  filterForLaunchStatus: PropTypes.func,
  filterForRocket: PropTypes.func
}

export default connect(mapStateToProps, mapDispatchToProps)(LaunchFilter)
