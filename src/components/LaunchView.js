import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const LaunchView = ({ data }) => {
  return (
    <View style={styles.container}>
      <Text>Launch #{data.flight_number}</Text>
      <Text>Mission name: {data.mission_name}</Text>
      <Text>Launch date (UTC): {data.launch_date_utc}</Text>
      <Text>
        Launch site: {data.launch_site.site_name_long} ({
          data.launch_site.site_name
        })
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1 }
})

export default LaunchView

const data = {
  flight_number: 63,
  mission_name: 'SES-12',
  launch_year: '2018',
  launch_date_unix: 1527740940,
  launch_date_utc: '2018-05-31T04:29:00.000Z',
  launch_date_local: '2018-05-31T00:29:00-04:00',
  rocket: {
    rocket_id: 'falcon9',
    rocket_name: 'Falcon 9',
    rocket_type: 'FT',
    first_stage: {
      cores: [
        {
          core_serial: 'B1040',
          flight: 2,
          block: 4,
          reused: true,
          land_success: null,
          landing_type: null,
          landing_vehicle: null
        }
      ]
    },
    second_stage: {
      payloads: [
        {
          payload_id: 'SES-12',
          reused: false,
          customers: ['SES'],
          payload_type: 'Satellite',
          payload_mass_kg: 5300,
          payload_mass_lbs: null,
          orbit: 'GTO'
        }
      ]
    }
  },
  telemetry: { flight_club: null },
  reuse: {
    core: true,
    side_core1: false,
    side_core2: false,
    fairings: false,
    capsule: false
  },
  launch_site: {
    site_id: 'ccafs_slc_40',
    site_name: 'CCAFS SLC 40',
    site_name_long: 'Cape Canaveral Air Force Station Space Launch Complex 40'
  },
  launch_success: null,
  links: {
    mission_patch: null,
    mission_patch_small: null,
    reddit_campaign:
      'https://www.reddit.com/r/spacex/comments/8jv0ed/ses12_launch_campaign_thread/',
    reddit_launch: null,
    reddit_recovery: null,
    reddit_media: null,
    presskit: null,
    article_link: null,
    wikipedia: null,
    video_link: null
  },
  details: null
}
