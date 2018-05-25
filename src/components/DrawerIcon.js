import React from 'react'
import { Image, StyleSheet } from 'react-native'
import info from '../assets/img/info.png'
import settings from '../assets/img/settings.png'
import rocket from '../assets/img/rocket.png'

const images = {
  info,
  settings,
  rocket
}

export default ({ image }) => (
  <Image source={images[image]} style={styles.icon} />
)

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
})
