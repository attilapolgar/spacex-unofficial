import React, { Component } from "react";
import { DrawerItems } from "react-navigation";
import { Image, ScrollView, StyleSheet } from "react-native";

class DrawerContent extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          style={styles.headerImage}
          source={require("../assets/img/drawer-image.jpg")}
        />
        <DrawerItems {...this.props} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  headerImage: {
    flex: 1,
    width: undefined,
    height: 150,
    resizeMode: "cover"
  }
});

export default DrawerContent;
