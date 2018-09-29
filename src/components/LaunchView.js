import React from 'react'
import { Card } from 'native-base'
import PropTypes from 'prop-types'

import LaunchViewSummary from './LaunchViewSummary'
import LaunchViewDetails from './LaunchViewDetails'
import LaunchViewLaunchSite from './LaunchViewLaunchSite'
import LaunchViewTelemetry from './LaunchViewTelemetry'
import LaunchViewRocketInfo from './LaunchViewRocketInfo'
import LaunchViewVideo from './LaunchViewVideo'
import LaunchViewLinks from './LaunchViewLinks'
import LaunchViewPatch from './LaunchViewPatch'

const LaunchView = ({ data }) => {
  return (
    <Card>
      <LaunchViewSummary data={data} showImage={false} />
      <LaunchViewPatch data={data} />
      <LaunchViewDetails data={data} />
      <LaunchViewLaunchSite data={data} />
      <LaunchViewTelemetry data={data} />
      <LaunchViewRocketInfo data={data} />
      <LaunchViewVideo data={data} />
      <LaunchViewLinks data={data} />
    </Card>
  )
}

LaunchView.propTypes = {
  data: PropTypes.object,
}

export default LaunchView
