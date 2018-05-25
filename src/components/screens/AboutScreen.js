import React, { Component } from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity
} from 'react-native'
import DrawerIcon from '../DrawerIcon'
import githubImage from '../../assets/img/github.png'
import linkedinImage from '../../assets/img/linkedin.png'

export default class AboutScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'About',
      drawerIcon: <DrawerIcon image={'user'} />
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container}>
          <Text>Created by Attila Polgar with ❤</Text>
          <Text>and</Text>
          <Text>React Native + Redux</Text>
          <View style={styles.socialImages}>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://www.linkedin.com/in/attilapolgar/')
              }
            >
              <Image style={styles.socialImage} source={linkedinImage} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL('https://github.com/raglopa/lbd-react-native')
              }
            >
              <Image style={styles.socialImage} source={githubImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  socialImages: {
    flexDirection: 'row',
    marginTop: 50
  },
  socialImage: {
    margin: 10,
    height: 48,
    width: 48
  }
})
