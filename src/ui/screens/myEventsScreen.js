import { StyleSheet, Image, View, Text, StatusBar, Alert } from "react-native";
import CHeader from "../components/molecules/CHeader/CHeader";
import QuizList from "../components/organisms/quizList";
import CButton from "../components/atoms/CButton/CButton";
import { useState } from "react";
const data = [
  {
    id: "1",
    icon: "",
    time: "09.00πμ - 11.00πμ",
    city: "Παραλία Αλίμου, Αθήνα",
    task: "Καθαρισμός Ακτής",
  },
  {
    id: "2",
    icon: "",
    time: "10.00πμ - 12.00μμ",
    city: "Μέσω Google Meet",
    task: "Πλαστικά στις Ακτές",
  },
  {
    id: "3",
    icon: "",
    time: "1.00πμ - 13.00μμ",
    city: "Μέσω Google Meet",
    task: "Βιώσιμη Ανάπτυξη",
  },
];
function ΜyEventsScreen(props) {
  const headerTitle = "Εκδηλώσεις";
  const buttonLeftTitle = "Προσεχώς";
  const buttonRightTitle = "Οι εκδηλώσεις μου";
  const buttonCheckInTitle = "Check-in";
  const subTitle = "Εκδηλώσεις που θα πάω";
  const notificationTitle =
    "Παρακαλούμε προβείτε σε check-in την ημέρα και ώρα έναρξης της κάθε εκδήλωσης";

  const onClickLeftButton = () => {};
  const onClickRightButton = () => {};
  return (
    <>
      <CHeader title={headerTitle} timeOff={null} />
      <View style={styles.buttonsContainer}>
        <CButton
          styles={styles.topButtons}
          title={buttonLeftTitle}
          color={"white"}
          fontWeight={"bold"}
          onClick={onClickLeftButton}
          disabled={false}
        />
        <CButton
          styles={styles.topButtons}
          title={buttonRightTitle}
          color={"white"}
          fontWeight={"bold"}
          onClick={onClickRightButton}
          disabled={false}
        />
      </View>
      <Text style={styles.subTitle}>{subTitle}</Text>

      <Text style={styles.notificationTitle}>{notificationTitle}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subTitle: {
    flex: 7,
    padding: 10,
    color: "blue",
    fontWeight: "bold",
  },
  notificationTitle: {
    flex: 1,
    padding: 10,
    color: "black",
    fontWeight: "bold",
  },
  topButtons: {
    flex: 1,
    padding: 10,
    width: "140px",
    height: "140px",
    backgroundColor: "white",
    borderRadius: "10px",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "10px",
    border: "2px solid black",
  },
});

export default ΜyEventsScreen;
