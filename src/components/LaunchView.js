import React from 'react'
import moment from 'moment'
import { View, StyleSheet, WebView, Dimensions, Linking } from 'react-native'
import {
  Container,
  Content,
  Left,
  Thumbnail,
  Card,
  CardItem,
  Text,
  Body,
  Right,
  ListItem,
  List
} from 'native-base'

import LaunchViewSummary from './LaunchViewSummary'
import LaunchViewRocketInfo from './LaunchViewRocketInfo'

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width

const LaunchView = ({ data }) => {
  const launchDate = moment(data.launch_date_utc).format('MM/DD/YYYY HH:mm:ss')
  const launchDateUTC = moment
    .utc(data.launch_date_utc)
    .format('MM/DD/YYYY HH:mm:ss')
  const embedVideoLink =
    data.links &&
    data.links.video_link &&
    data.links.video_link.replace('watch?v=', 'embed/')
  return (
    <View>
      <LaunchViewSummary data={data} />

      {data.details && (
        <Card>
          <CardItem header style={styles.cardItem}>
            <Text>Details</Text>
          </CardItem>
          <CardItem style={[styles.cardItem]}>
            <Text style={styles.details}>{data.details}</Text>
          </CardItem>
        </Card>
      )}

      <Card>
        <CardItem header style={styles.cardItem}>
          <Text>Telemetry</Text>
        </CardItem>
        <CardItem style={[styles.cardItem]}>
          <Text style={styles.details}>...</Text>
        </CardItem>
      </Card>

      <LaunchViewRocketInfo data={data} />

      {embedVideoLink && (
        <Card>
          <CardItem style={styles.cardItem}>
            <WebView
              style={styles.video}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: embedVideoLink }}
              scalesPageToFit={true}
            />
          </CardItem>
        </Card>
      )}

      <Card>
        <CardItem header style={styles.cardItem}>
          <Text>Links</Text>
        </CardItem>
        <CardItem>
          <Content>
            <List>
              {Object.keys(data.links).map(key => {
                const url = data.links[key]
                return (
                  <ListItem key={key}>
                    <Text
                      style={styles.link}
                      onPress={() => Linking.openURL(url)}
                    >
                      {key
                        .toUpperCase()
                        .split('_')
                        .join(' ')}
                    </Text>
                  </ListItem>
                )
              })}
            </List>
          </Content>
        </CardItem>
      </Card>
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
  link: { textDecorationLine: 'underline' },
  video: {
    alignSelf: 'center',
    width: deviceWidth * 0.9,
    height: 300,
    flex: 1
  },
  details: {
    textAlign: 'justify'
  }
})

export default LaunchView

const data = {
  launch_year: '2018',
  launch_date_unix: 1527018478,
  launch_date_utc: '2018-05-22T19:47:58Z',
  launch_date_local: '2018-05-22T12:47:58-08:00',
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
