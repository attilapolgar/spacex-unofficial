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
    data.details && (
      <Card>
        <CardItem header style={styles.cardItem}>
          <Thumbnail small source={require('../assets/img/text-lines.png')} />
          <Text style={styles.headerText}>Details</Text>
        </CardItem>
        <CardItem style={[styles.cardItem]}>
          <Text style={styles.details}>{data.details}</Text>
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
  }
})
