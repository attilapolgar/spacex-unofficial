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
    data.launch_site && (
      <Card>
        <CardItem header style={styles.cardItem}>
          <Thumbnail small source={require('../assets/img/street-map.png')} />
          <Text style={styles.headerText}>Launch site</Text>
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
          </Left>
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
