import { StyleSheet, Image, Text, Alert } from "react-native";
import CButton from "../components/atoms/CButton/CButton";

function RefuserLevelSuccessScreen({ navigation }) {
  const buttonTitle = "Συνέχεια";
  const notificationTitle =
    "Πλέον έχεις πρόσβαση σε νέες μοναδικές προσφορές και κουπόνια επιλεγμένων προϊόντων!";

  return (
    <>
      <Image
        source={require("../../assets/refuser-success.png")}
        style={styles.banner}
      />

      <Text style={styles.notificationTitle}>{notificationTitle}</Text>
      <CButton
        styles={styles.levelUpButton}
        title={buttonTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={Alert.alert("Congrats!!!")}
      />
    </>
  );
}

const styles = StyleSheet.create({
  banner: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  notificationTitle: {
    flex: 1,
    padding: 50,
    width: "100%",
    color: "#484848",
    fontWeight: "bold",
    textAlign: "center",
  },
  levelUpButton: {
    flex: 1,
    padding: 20,
    width: "180px",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: "40px",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
});

export default RefuserLevelSuccessScreen;
