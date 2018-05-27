import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import Ionicons from 'react-native-vector-icons/Entypo'

export default ({ active, navigation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name={'menu'} size={36} color={'white'} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {}
})
