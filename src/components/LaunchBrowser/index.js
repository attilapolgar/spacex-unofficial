import React, { Component } from 'react'
import { connect } from 'react-redux'
import { StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

import {
  ScrollView,
  TouchableNativeFeedback,
  FlatList,
  View,
} from 'react-native'

import LaunchViewSummary from '@components/LaunchViewSummary'
import LaunchFilter from './LaunchFilter'

class LaunchBrowser extends Component {
  static navigationOptions = () => ({
    title: 'Launch browser',
  })

  constructor(props) {
    super(props)
  }

  onValueChange = status => {
    this.props.filterForLaunchStatus({ status })
  }

  onLaunchSelected = data => {
    this.props.navigation.navigate('MissionDetails', {
      data,
    })
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <LaunchFilter />
        {this.props.filteredData && (
          <FlatList
            data={this.props.filteredData}
            keyExtractor={item =>
              `${item.flight_number}-${item.launch_date_unix}`
            }
            renderItem={({ item }) => (
              <TouchableNativeFeedback
                onPress={() => this.onLaunchSelected(item)}
              >
                <View>
                  <LaunchViewSummary data={item} />
                </View>
              </TouchableNativeFeedback>
            )}
          />
        )}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {},
})

const mapStateToProps = state => ({
  filteredData: state.launchBrowser.filteredData,
  launchStatusFilter: state.launchBrowser.launchStatusFilter,
})

LaunchBrowser.propTypes = {
  filterForLaunchStatus: PropTypes.func,
  filteredData: PropTypes.array,
  navigation: PropTypes.object,
}

export default connect(mapStateToProps)(LaunchBrowser)
