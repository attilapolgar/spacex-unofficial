import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import PropTypes from 'prop-types'

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
      <LaunchViewSummary data={data} showImage={false} />
      <Image style={styles.image} source={{ uri: data.links.mission_patch }} />
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
  },
  image: {
    width: undefined,
    height: 300,
    resizeMode: 'contain',
    marginTop: 15,
    marginBottom: 15
  }
})

LaunchView.propTypes = {
  data: PropTypes.object
}

export default LaunchView
