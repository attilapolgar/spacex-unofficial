import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import menuImage from '../assets/img/menu.png'
import arrowImage from '../assets/img/arrow_back.png'

export default ({ active, navigation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={styles.icon} source={active ? arrowImage : menuImage} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {
    width: 36,
    height: 36
  }
})

const a = {
  flight_number: 62,
  mission_name: 'Iridium NEXT Mission 6',
  launch_year: '2018',
  launch_date_unix: 1527018478,
  launch_date_utc: '2018-05-22T19:47:58Z',
  launch_date_local: '2018-05-22T12:47:58-08:00',
  rocket: {
    rocket_id: 'falcon9',
    rocket_name: 'Falcon 9',
    rocket_type: 'FT',
    first_stage: {
      cores: [
        {
          core_serial: 'B1043',
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
          payload_id: 'Iridium NEXT 6',
          reused: false,
          customers: ['Iridium Communications'],
          payload_type: 'Satellite',
          payload_mass_kg: 4300,
          payload_mass_lbs: 9479.9,
          orbit: 'PO'
        },
        {
          payload_id: 'GRACE-FO 1-2',
          reused: false,
          customers: ['NASA', 'DLR'],
          payload_type: 'Satellite',
          payload_mass_kg: 1160,
          payload_mass_lbs: 2557.4,
          orbit: 'PO'
        }
      ]
    }
  },
  telemetry: { flight_club: 'https://www.flightclub.io/result?code=IRD6' },
  reuse: {
    core: true,
    side_core1: false,
    side_core2: false,
    fairings: false,
    capsule: false
  },
  launch_site: {
    site_id: 'vafb_slc_4e',
    site_name: 'VAFB SLC 4E',
    site_name_long: 'Vandenberg Air Force Base Space Launch Complex 4E'
  },
  launch_success: true,
  links: {
    mission_patch: 'https://images2.imgbox.com/55/c2/l3BqVwEj_o.png',
    mission_patch_small: 'https://images2.imgbox.com/02/5c/d5zmduUG_o.png',
    reddit_campaign:
      'https://www.reddit.com/r/spacex/comments/8ffsgl/iridium6_gracefo_launch_campaign_thread/',
    reddit_launch:
      'https://www.reddit.com/r/spacex/comments/8kyk5a/rspacex_iridium_next_6_official_launch_discussion/',
    reddit_recovery: null,
    reddit_media:
      'https://www.reddit.com/r/spacex/comments/8l9tfz/rspacex_iridium6gracefo_media_thread_videos/',
    presskit:
      'http://www.spacex.com/sites/spacex/files/iridium6presskit2018521.pdf',
    article_link:
      'https://spaceflightnow.com/2018/05/22/rideshare-launch-by-spacex-serves-commercial-and-scientific-customers/',
    wikipedia:
      'https://en.wikipedia.org/wiki/Gravity_Recovery_and_Climate_Experiment',
    video_link: 'https://www.youtube.com/watch?v=I_0GgKfwCSk'
  },
  details:
    'GFZ arranged a rideshare of GRACE-FO on a Falcon 9 with Iridium following the cancellation of their Dnepr launch contract in 2015. Iridium CEO Matt Desch disclosed in September 2017 that GRACE-FO would be launched on the sixth Iridium NEXT mission. The booster reuse turnaround was a record 4.5 months between flights.'
}
