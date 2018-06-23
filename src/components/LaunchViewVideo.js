import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'

import { StyleSheet, WebView, Dimensions, View } from 'react-native'
import { CardItem, Text } from 'native-base'

const deviceWidth = Dimensions.get('window').width

export default ({ data }) => {
  const embedVideoLink =
    data.links &&
    data.links.video_link &&
    data.links.video_link.replace('watch?v=', 'embed/')
  return (
    embedVideoLink && (
      <View>
        <CardItem header style={styles.cardItem}>
          <MaterialIcons
            name={'play-circle-filled'}
            size={32}
            color={'#005288'}
          />
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
      </View>
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
