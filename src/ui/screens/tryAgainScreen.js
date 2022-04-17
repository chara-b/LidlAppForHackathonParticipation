import {
  StyleSheet,
  Image,
  View,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import CButton from "../components/atoms/CButton/CButton";

function TryAgainScreen({ navigation, numberOfAnswerLeft }) {
  const buttonTitle = "ΕΠΙΣΤΡΟΦΗ";
  const description = "Είσαι πολύ κοντά στη λύση!";
  const description2 = `Βρες και τις άλλες ${numberOfAnswerLeft} απαντήσεις!`;

  const onSubmit = () => {
    navigation.navigate("QuizScreen");
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/lidl-icon.png")}
        style={styles.icon}
      />
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.description2}>{description2}</Text>
      <CButton
        styles={styles.levelUpButton}
        title={buttonTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  icon: { flex: 1, resizeMode: "contain" },
  description: {
    flex: 1,
    padding: 50,
    width: "100%",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  description2: {
    flex: 1,
    padding: 50,
    width: "100%",
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default TryAgainScreen;
