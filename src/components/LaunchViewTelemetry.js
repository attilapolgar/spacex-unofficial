import React from 'react'
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { StyleSheet, Linking, Image, View } from 'react-native'
import {
  Right,
  Left,
  Thumbnail,
  Card,
  Badge,
  CardItem,
  Text,
  Body
} from 'native-base'

export default ({ data }) => {
  return (
    data.telemetry &&
    data.telemetry.flight_club && (
      <Card>
        <CardItem header style={styles.cardItem}>
          <Thumbnail small source={require('../assets/img/bar-chart.png')} />
          <Text style={styles.headerText}>Telemetry</Text>
        </CardItem>
        <CardItem style={[styles.cardItem]}>
          <Text
            style={styles.link}
            onPress={() => Linking.openURL(data.telemetry.flight_club)}
          >
            {data.telemetry.flight_club}
          </Text>
        </CardItem>
      </Card>
    )
  )
}
const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  headerText: {
    marginLeft: 10
  },
  link: { textDecorationLine: 'underline' }
})
