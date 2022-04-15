import { StyleSheet, Image, View, Text, StatusBar, Alert } from "react-native";
import CHeader from "../components/molecules/CHeader/CHeader";
import QuizList from "../components/organisms/quizList";
import CButton from "../components/atoms/CButton/CButton";
import { useState } from "react";
import CEventsList from "../components/organisms/eventsList";
import EventsList from "../components/organisms/eventsList";
const data = [
  {
    id: "1",
    icon: "../../../../assets/25-calendar-icon.png",
    time: "09.00πμ - 11.00πμ",
    city: "Παραλία Αλίμου, Αθήνα",
    task: "Καθαρισμός Ακτής",
  },
  {
    id: "2",
    icon: "../../../../assets/30-calendar-icon.png",
    time: "10.00πμ - 12.00μμ",
    city: "Μέσω Google Meet",
    task: "Πλαστικά στις Ακτές",
  },
  {
    id: "3",
    icon: "../../../../assets/1-calendar-icon.png",
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
  const [buttonState, setButtonState] = useState({
    btnSelected: "left",
  });
  const onClickLeftButton = () => {
    setButtonState({ btnSelected: "left" });
  };
  const onClickRightButton = () => {
    setButtonState({ btnSelected: "right" });
  };
  return (
    <>
      <CHeader title={headerTitle} timeOff={null} />
      <View style={styles.buttonsContainer}>
        <CButton
          styles={
            buttonState.btnSelected === "left"
              ? styles.leftButtonSelected
              : styles.topButtons
          }
          title={buttonLeftTitle}
          color={buttonState.btnSelected === "left" ? "white" : "black"}
          fontWeight={"bold"}
          onClick={onClickLeftButton}
          disabled={false}
        />
        <CButton
          styles={
            buttonState.btnSelected === "right"
              ? styles.rightButtonSelected
              : styles.topButtons
          }
          title={buttonRightTitle}
          color={buttonState.btnSelected === "right" ? "white" : "black"}
          fontWeight={"bold"}
          onClick={onClickRightButton}
          disabled={false}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <EventsList data={data}></EventsList>
        <Text style={styles.notificationTitle}>{notificationTitle}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 9,
    alignItems: "flex-start",
  },
  buttonsContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subTitle: {
    flex: 1,
    color: "blue",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  notificationTitle: {
    flex: 1,
    color: "black",
    fontWeight: "bold",
  },
  topButtons: {
    flex: 1,

    width: "170px",
    height: "150px",
    backgroundColor: "white",
    borderRadius: "10px",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "10px",
    border: "2px solid black",
  },
  leftButtonSelected: {
    flex: 1,
    padding: 19,
    width: "170px",
    height: "150px",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: "10px",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "10px",
    border: "2px solid black",
  },
  rightButtonSelected: {
    flex: 1,
    padding: 19,
    width: "170px",
    height: "150px",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: "10px",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "10px",
    border: "2px solid black",
  },
});

export default ΜyEventsScreen;
