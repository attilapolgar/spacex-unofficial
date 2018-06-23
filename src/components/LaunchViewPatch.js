import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { CardItem } from 'native-base'

const LaunchViewDetails = ({ data }) => {
  return (
    data.links &&
    data.links.mission_patch && (
      <CardItem style={[styles.cardItem]}>
        <Image
          style={styles.image}
          source={{ uri: data.links.mission_patch }}
        />
      </CardItem>
    )
  )
}

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center'
  },
  image: {
    width: 300,
    height: 300,

    resizeMode: 'contain',
    marginTop: 15,
    marginBottom: 15
  }
})

export default LaunchViewDetails
