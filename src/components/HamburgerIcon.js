import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import menuImage from '../assets/img/menu.png'
import arrowImage from '../assets/img/arrow_back.png'

export default ({ active, navigation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={styles.icon} source={active ? arrowImage : menuImage} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {
    width: 36,
    height: 36
  }
})
