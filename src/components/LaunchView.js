import React from 'react'
import moment from 'moment'
import { View, StyleSheet } from 'react-native'

import LaunchViewSummary from './LaunchViewSummary'
import LaunchViewDetails from './LaunchViewDetails'
import LaunchViewLaunchSite from './LaunchViewLaunchSite'
import LaunchViewTelemetry from './LaunchViewTelemetry'
import LaunchViewRocketInfo from './LaunchViewRocketInfo'
import LaunchViewVideo from './LaunchViewVideo'
import LaunchViewLinks from './LaunchViewLinks'

const LaunchView = ({ data }) => {
  return (
    <View style={styles.container}>
      <LaunchViewSummary data={data} />
      <LaunchViewDetails data={data} />
      <LaunchViewLaunchSite data={data} />
      <LaunchViewTelemetry data={data} />
      <LaunchViewRocketInfo data={data} />
      <LaunchViewVideo data={data} />
      <LaunchViewLinks data={data} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  }
})

export default LaunchView

const data = {
  launch_year: '2018',
  launch_date_unix: 1527018478,
  launch_date_utc: '2018-05-22T19:47:58Z',
  launch_date_local: '2018-05-22T12:47:58-08:00',
  reuse: {
    core: true,
    side_core1: false,
    side_core2: false,
    fairings: false,
    capsule: false
  },
  launch_success: true
}
