import React from 'react'
import { MaterialIcons } from '@expo/vector-icons'
import { StyleSheet, View } from 'react-native'
import { CardItem, Text } from 'native-base'

const LaunchViewDetails = ({ data }) => {
  return (
    <View>
      <CardItem header style={[styles.cardItem, styles.cardHeader]}>
        <MaterialIcons name={'info'} size={32} color={'#005288'} />
        <Text style={styles.headerText}>Details</Text>
      </CardItem>
      <CardItem style={[styles.cardItem]}>
        <Text style={styles.details}>
          {data.details ? data.details : 'No details yet.'}
        </Text>
      </CardItem>
    </View>
  )
}

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.2)'
  },
  headerText: {
    marginLeft: 10
  }
})

export default LaunchViewDetails
