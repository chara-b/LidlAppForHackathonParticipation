import React from "react";
import { StyleSheet, SafeAreaView, Image, View, Text } from "react-native";

import { colors } from "../defaults/defaultStyles";

function WelcomeScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image source={require("../assets/lidl-icon.png")} style={styles.logo} />
      <View style={styles.button}>
        <Text style={styles.buttonText}>Click me</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1, //full screen
    alignItems: "center", //y
    justifyContent: "space-evenly", //x
  },
  logo: {
    width: "150px",
    height: "150px",
    resizeMode: "contain",
  },
  button: {
    width: "50%",
    height: "7%",
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px -8px 20px rgba(50, 50, 50, 0.75) inset",
  },
  buttonText: { color: colors.primary, fontWeight: "bold" },
});

export default WelcomeScreen;
