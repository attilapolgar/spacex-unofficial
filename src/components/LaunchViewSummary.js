import React from 'react'
import moment from 'moment'
import { StyleSheet, Linking, Image } from 'react-native'
import { Right, Left, Thumbnail, Card, CardItem, Text, Body } from 'native-base'

export default ({ data }) => {
  const launchDate = moment(data.launch_date_utc).format('MM/DD/YYYY HH:mm:ss')
  const launchDateUTC = moment
    .utc(data.launch_date_utc)
    .format('MM/DD/YYYY HH:mm:ss')
  return (
    <Card>
      <CardItem header style={styles.cardItem}>
        <Left>
          <Image
            source={{ uri: data.links.mission_patch }}
            style={styles.image}
          />
          <Body>
            <Text style={styles.missionName}>{data.mission_name}</Text>
            <Text>Launch #{data.flight_number}</Text>
            <Text note>Local: {launchDate}</Text>
            <Text note>UTC: {launchDateUTC}</Text>
          </Body>
        </Left>
      </CardItem>
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
      <CardItem style={[styles.cardItem, styles.result]}>
        <Text
          note
          style={[
            styles.resultText,
            data.launch_success ? styles.success : styles.fail
          ]}
        >
          {data.launch_success ? 'SUCCESS' : 'FAILED'}
        </Text>
      </CardItem>
    </Card>
  )
}
const styles = StyleSheet.create({
  container: { flex: 1 },
  missionName: {
    fontSize: 24
  },
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  result: {
    justifyContent: 'center'
  },
  image: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 24
  },
  success: {
    color: 'green'
  },
  fail: {
    color: 'red'
  },
  link: { textDecorationLine: 'underline' }
})
