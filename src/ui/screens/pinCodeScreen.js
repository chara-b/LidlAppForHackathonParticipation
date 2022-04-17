import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import CButton from "../components/atoms/CButton/CButton";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

function PinCodeScreen({ codeProp, navigation }) {
  const description =
    "Παρακαλούμε καταχωρείστε το 4 ψήφιο κωδικό που λάβατε κατά τη διάρκεια του event";
  const buttonTitle = "ΕΠΙΣΤΡΟΦΗ";
  const [code, onChangeCode] = useState();
  const onSubmit = () => {
    if (code === codeProp) {
      //navigate to success screen...

      navigation.navigate("QuizScreen");
    }
  };
  return (
    <View style={styles.container}>
      <Ionicons name="close" size={24} color="black" style={styles.closeIcon} />
      <Text style={styles.description}>{description}</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeCode}
        value={code}
      />
      <CButton
        styles={styles.button}
        title={buttonTitle}
        color={"black"}
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
    backgroundColor: "rgb(37,84,160)",
    justifyContent: "space-evenly",
    alignContent: "center",
  },
  button: {
    flex: 1,
    padding: 20,
    width: "50%",
    backgroundColor: "white",
    borderRadius: "40px",
    textAlign: "center",
  },
  description: {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 17,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 3,
  },
});

export default PinCodeScreen;
