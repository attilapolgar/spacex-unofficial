import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Entypo } from '@expo/vector-icons'
import PropTypes from 'prop-types'

const HamburgerIcon = ({ onPress }) => (
  <TouchableOpacity onPress={onPress}>
    <Entypo name={'menu'} size={36} color={'white'} />
  </TouchableOpacity>
)

HamburgerIcon.propTypes = {
  onPress: PropTypes.func,
}

export default HamburgerIcon
