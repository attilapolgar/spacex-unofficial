import React from 'react'
import { CardItem, Text, Body } from 'native-base'
import { StyleSheet } from 'react-native'

const CardItemInfoRow = ({ data }) => (
  <CardItem style={styles.cardItem} key={data.id}>
    <Body>
      {data.title && <Text style={styles.infoKey}>{data.title}</Text>}
      <Text>{data.text}</Text>
    </Body>
  </CardItem>
)

export default CardItemInfoRow

const borderColor = 'rgba(0, 0, 0, 0.2)'

const styles = StyleSheet.create({
  cardItem: {
    flex: 1,
    borderBottomWidth: 1,
    borderColor,
  },
  infoKey: {
    fontSize: 10,
  },
})
