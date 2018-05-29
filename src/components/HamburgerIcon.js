import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import { Entypo } from '@expo/vector-icons'

export default ({ active, navigation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Entypo name={'menu'} size={36} color={'white'} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {}
})
