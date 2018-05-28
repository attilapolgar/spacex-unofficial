import React from 'react'
import { SafeAreaView, DrawerItems } from 'react-navigation'
import { Image, ScrollView, StyleSheet } from 'react-native'

const DrawerContent = props => (
  <ScrollView style={styles.container}>
    <Image
      style={styles.headerImage}
      source={require('../assets/img/falcon.jpg')}
    />
    <DrawerItems {...props} />
  </ScrollView>
)

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerImage: {
    flex: 1,
    width: undefined,
    height: 200,
    resizeMode: 'cover'
  }
})

export default DrawerContent
