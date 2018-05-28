import React from 'react'
import { TouchableOpacity, Image, StyleSheet } from 'react-native'
import EntypoIcon from 'react-native-vector-icons/Entypo'

export default ({ active, navigation, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <EntypoIcon name={'menu'} size={36} color={'white'} />
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  icon: {}
})
