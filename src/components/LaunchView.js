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
    <View style={styles.container}>
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
        <CardItem style={[styles.cardItem]}>
          <Left>
            <Body>
              <Text
                style={styles.link}
                onPress={() =>
                  Linking.openURL(
                    `https://www.google.com/maps/search/${
                      data.launch_site.site_name_long
                    }`
                  )
                }
              >
                {data.launch_site.site_name_long} ({data.launch_site.site_name})
              </Text>
            </Body>
            <Thumbnail source={require('../assets/img/street-map.png')} />
          </Left>
        </CardItem>
      </Card>
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
              {Object.keys(data.links)
                .filter(k => data.links[k])
                .map(key => {
                  const url = data.links[key]
                  return (
                    <ListItem key={key}>
                      <Text
                        style={styles.link}
                        onPress={() => Linking.openURL(url)}
                      >
                        {data.links[key]}
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
  container: { flex: 1, backgroundColor: '#fff' },
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
