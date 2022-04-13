import React from "react";
import { StyleSheet, Image, View, Text, StatusBar, Alert } from "react-native";
import CHeader from "../components/molecules/CHeader/CHeader";
import QuizList from "../components/organisms/quizBuilder/quizBuilder";
import CButton from "../components/atoms/CButton/CButton";
const data = [
  {
    id: "1",
    title: "Χάρτινη για μπατονέτες",
  },
  {
    id: "2",
    title: "Πλαστική τυροκαυτερής",
  },
  {
    id: "3",
    title: "Χάρτινη για καλαμάκια",
  },
  {
    id: "4",
    title: "Χάρτινη για γεμιστά",
  },
];
function myEventsScreen(props) {
  const headerTitle = "Εκδηλώσεις";
  const buttonLeftTitle = "Προσεχώς";
  const buttonRightTitle = "Οι εκδηλώσεις μου";
  const buttonCheckInTitle = "Check-in";

  const buttonDisabled = false;
  const subTitle = "Εκδηλώσεις που θα πάω";
  const notificationTitle =
    "Παρακαλούμε προβείτε σε check-in την ημέρα και ώρα έναρξης της κάθε εκδήλωσης";

  return (
    <>
      <CHeader title={headerTitle} />
      <CButton
        styles={styles.quizButton}
        title={buttonTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={Alert.alert("Quiz answered")}
        disabled={buttonDisabled}
      />
      <CButton
        styles={styles.quizButton}
        title={buttonTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={Alert.alert("Quiz answered")}
        disabled={buttonDisabled}
      />
      <Text style={styles.subTitle}>{subTitle}</Text>
      <QuizList data={data} />
      <Text style={styles.notificationTitle}>{notificationTitle}</Text>
    </>
  );
}

const styles = StyleSheet.create({
  quizBanner: {
    flex: 1,
    width: "90%",
    height: "100px",
    marginTop: StatusBar.currentHeight || 0,
  },
  subTitle: {
    flex: 0.3,
    padding: 10,
    color: "blue",
    fontWeight: "bold",
  },
  notificationTitle: {
    flex: 0.7,
    padding: 10,
    color: "black",
    fontWeight: "bold",
  },
});

export default myEventsScreen;
