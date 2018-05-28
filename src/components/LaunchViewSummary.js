import React from 'react'
import moment from 'moment'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Linking, Image, View } from 'react-native'
import { Left, Card, CardItem, Text, Body } from 'native-base'

export default ({ data, onPress }) => {
  const launchDateUTC = moment.utc(data.launch_date_utc).format('MM/DD/YYYY')

  return (
    <Card
      style={[
        styles.container,
        data.launch_success === true ? styles.success : '',
        data.launch_success === false ? styles.fail : ''
      ]}
    >
      <CardItem header style={[styles.cardItem]}>
        <Left>
          {data && data.links && data.links.mission_patch ? (
            <Image
              source={{ uri: data.links.mission_patch }}
              style={styles.image}
            />
          ) : (
            <View style={styles.imagePlaceholder} />
          )}

          <Body>
            <Text style={styles.missionName}>
              #{data.flight_number}: {data.mission_name}
            </Text>

            <Text note>
              <MaterialCommunityIcons name={`calendar`} color={'black'} />
              {'  '} {launchDateUTC}
            </Text>
            <Text note>
              <MaterialIcons name={`place`} color={'black'} />
              {'  '} {data.launch_site.site_name}
            </Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderLeftWidth: 5
  },
  missionName: {
    fontSize: 18
  },
  cardItem: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
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
    borderColor: 'green'
  },
  fail: {
    borderColor: 'red'
  },
  link: { textDecorationLine: 'underline' }
})
