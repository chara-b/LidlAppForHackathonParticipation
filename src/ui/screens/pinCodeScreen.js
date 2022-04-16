import { StyleSheet, Image, View, Text, ImageBackground } from "react-native";
import CButton from "../components/atoms/CButton/CButton";

function PinCodeScreen(props) {
  const description =
    "Παρακαλούμε καταχωρείστε το 4 ψήφιο κωδικό που λάβατε κατά τη διάρκεια του event";
  const buttonTitle = "Επιστροφή";
  const onSubmit = () => {};
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/background.png")}
        style={styles.pinCodeScreen}
      />
      <Text style={{ flex: 1 }}>{description}</Text>
      <CButton
        styles={styles.button}
        title={buttonTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={onSubmit}
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
  pinCodeScreen: {
    width: "100%",
    height: "100%",
  },
  button: {
    padding: 20,
    width: "100%",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: "40px",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default PinCodeScreen;
