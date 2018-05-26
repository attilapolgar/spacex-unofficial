import React from 'react'
import { Image, StyleSheet } from 'react-native'
import info from '../assets/img/info.png'
import settings from '../assets/img/settings.png'
import rocket from '../assets/img/rocket.png'
import rocket2 from '../assets/img/rocket2.png'
import placeholder from '../assets/img/placeholder.png'
import spaceCapsule from '../assets/img/space-capsule.png'
import spacexLogo from '../assets/img/spacex-logo.png'

const images = {
  info,
  settings,
  rocket,
  rocket2,
  placeholder,
  'space-capsule': spaceCapsule,
  'spacex-logo': spacexLogo
}

export default ({ image }) => (
  <Image source={images[image]} style={styles.icon} />
)

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  }
})
