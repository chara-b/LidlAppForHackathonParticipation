import { StyleSheet, Image, View } from "react-native";

function FinalScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/final.png")}
        style={styles.finalscreen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  finalscreen: {
    width: "100%",
    height: "100%",
  },
});

export default FinalScreen;
