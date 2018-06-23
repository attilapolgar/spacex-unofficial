import React from 'react'
import moment from 'moment'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { MaterialIcons } from '@expo/vector-icons'

import { StyleSheet, Image, View } from 'react-native'
import { Left, CardItem, Text, Body } from 'native-base'

const LaunchViewSummary = ({ data, showImage = true }) => {
  const launchDateUTC = moment
    .utc(data.launch_date_utc)
    .format('MM/DD/YYYY hh:mm:ss')
  const diff = moment(launchDateUTC, 'MM/DD/YYYY').fromNow()

  return (
    <View>
      <CardItem
        header
        style={[
          styles.cardItem,
          styles.container,
          data.launch_success === true ? styles.success : '',
          data.launch_success === false ? styles.fail : ''
        ]}
      >
        <Left>
          {data.links &&
            data.links.mission_patch &&
            showImage && (
              <Image
                source={{ uri: data.links.mission_patch_small }}
                style={styles.image}
              />
            )}

          <Body>
            <Text style={styles.missionName}>
              #{data.flight_number}: {data.mission_name}
            </Text>

            <Text note>
              <MaterialCommunityIcons name={`calendar`} color={'black'} />
              {'  '} {launchDateUTC} ({diff})
            </Text>
            <Text note>
              <MaterialIcons name={`place`} color={'black'} />
              {'  '} {data.launch_site.site_name}
            </Text>
          </Body>
        </Left>
      </CardItem>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  missionName: {
    fontSize: 18
  },
  cardItem: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.2)',
    borderLeftColor: 'rgba(0, 0, 0, 0.2)',
    borderTopColor: 'rgba(0, 0, 0, 0.2)'
  },
  result: {
    justifyContent: 'center'
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: 'contain'
  },
  imagePlaceholder: {
    width: 100,
    height: 100
  },
  resultText: {
    fontWeight: 'bold',
    fontSize: 24
  },
  success: {
    borderLeftWidth: 5,
    borderLeftColor: 'green'
  },
  fail: {
    borderLeftWidth: 5,
    borderLeftColor: 'red'
  },
  link: { textDecorationLine: 'underline' }
})

export default LaunchViewSummary
