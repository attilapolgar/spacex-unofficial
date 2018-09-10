import React, { Component } from "react"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { Container } from "native-base"
import { WebBrowser } from "expo"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import AppHeader from "@components/AppHeader"
export default class AboutScreen extends Component {
  render() {
    return (
      <Container>
        <AppHeader navigation={this.props.navigation} title="About" />

        <View style={styles.container}>
          <Text>Created by Attila Polgar</Text>
          <Text>raglopa@gmail.com</Text>
          <View style={styles.socialImages}>
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://www.linkedin.com/in/attilapolgar/"
                )
              }
            >
              <MaterialCommunityIcons
                name={"linkedin-box"}
                size={75}
                color={"black"}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                WebBrowser.openBrowserAsync(
                  "https://github.com/raglopa/spacex-unofficial"
                )
              }
            >
              <MaterialCommunityIcons
                name={"github-circle"}
                size={75}
                color={"black"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    )
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
  socialImages: {
    flexDirection: "row",
    marginTop: 50,
  },
  socialImage: {
    margin: 10,
    height: 48,
    width: 48,
  },
})
