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
      >
        <CButton
          styles={styles.closeButton}
          onClick={onSubmit}
          iconName={"close"}
          iconSize={40}
          iconColor={"black"}
        />
        <View
          style={{
            position: "absolute",
            top: "35%",
            left: "35%",
            right: "35%",
            bottom: "35%",
            justifyContent: "center",
            alignItems: "center",
            width: "30px",
            textAlign: "center",
          }}
        >
          <Text style={{ flex: 1 }}>{description}</Text>
        </View>
        <CButton
          styles={styles.button}
          title={buttonTitle}
          color={"white"}
          fontWeight={"bold"}
          onClick={onSubmit}
        />
      </ImageBackground>
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
