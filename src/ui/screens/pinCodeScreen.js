import { StyleSheet, Image, View, Text, ImageBackground } from "react-native";
import CButton from "../components/atoms/CButton/CButton";
import { Ionicons } from "@expo/vector-icons";

function PinCodeScreen(props) {
  const description =
    "Παρακαλούμε καταχωρείστε το 4 ψήφιο κωδικό που λάβατε κατά τη διάρκεια του event";
  const buttonTitle = "ΕΠΙΣΤΡΟΦΗ";
  const onSubmit = () => {};
  return (
    <ImageBackground
      source={require("../../assets/background.png")}
      style={styles.pinCodeScreen}
    >
      <View
        style={{
          position: "absolute",
          top: "5%",
          left: "90%",
          right: "5%",
          bottom: "90%",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Ionicons
          name="close"
          size={24}
          color="black"
          style={styles.closeIcon}
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: "45%",
          left: "0%",
          right: "5%",
          bottom: "0%",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <Text style={styles.description}>{description}</Text>
      </View>
      <View
        style={{
          position: "absolute",
          top: "60%",
          left: "0%",
          right: "50%",
          bottom: "0%",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          textAlign: "center",
        }}
      >
        <CButton
          styles={styles.button}
          title={buttonTitle}
          color={"black"}
          fontWeight={"bold"}
          onClick={onSubmit}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  pinCodeScreen: {
    width: "100%",
    height: "100%",
  },
  button: {
    flex: 2,
    padding: 20,
    width: "100%",
    backgroundColor: "white",
    borderRadius: "40px",
    textAlign: "center",
  },
  description: {
    flex: 1,
    justifyContent: "space-evenly",
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
});

export default PinCodeScreen;
