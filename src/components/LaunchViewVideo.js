import React from 'react'
import moment from 'moment'
import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import {
  StyleSheet,
  Linking,
  Image,
  View,
  WebView,
  Dimensions
} from 'react-native'
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

const deviceHeight = Dimensions.get('window').height
const deviceWidth = Dimensions.get('window').width
export default ({ data }) => {
  const embedVideoLink =
    data.links &&
    data.links.video_link &&
    data.links.video_link.replace('watch?v=', 'embed/')
  return (
    embedVideoLink && (
      <Card>
        <CardItem header style={styles.cardItem}>
          <Thumbnail small source={require('../assets/img/play-button.png')} />
          <Text style={styles.headerText}>Video</Text>
        </CardItem>
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
  video: {
    alignSelf: 'center',
    width: deviceWidth * 0.9,
    height: 300,
    flex: 1
  }
})
