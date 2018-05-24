import React from 'react'
import { Image, StyleSheet } from 'react-native'
import info from '../assets/img/info.png'
import settings from '../assets/img/settings.png'
import time from '../assets/img/time.png'

const images = {
  user: info,
  settings,
  time
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
