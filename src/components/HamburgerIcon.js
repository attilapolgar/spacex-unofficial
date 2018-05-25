import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import menuImage from '../assets/img/menu.png'

export default ({ active, navigation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Image style={styles.icon} source={menuImage} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {
    width: 36,
    height: 36
  }
})
