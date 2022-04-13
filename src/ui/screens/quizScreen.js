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
function QuizScreen(props) {
  const buttonTitle = "ΥΠΟΒΟΛΗ";
  const headerTitle = "Quiz";
  const buttonDisabled = false;
  const quizQuestion =
    "Ποιές από τις παραπάνω συσκευασίες είναι 100% ανακυκλώσιμες;";
  const quizSubQuestionTitle = "Επέλεξε όλες τις σωστές απαντήσεις";

  return (
    <>
      <CHeader title={headerTitle} />
      <Image
        source={require("../../assets/quiz-banner.png")}
        style={styles.quizBanner}
      />
      <Text style={styles.quizQuestion}>{quizQuestion}</Text>
      <Text style={styles.quizSubQuestionTitle}>{quizSubQuestionTitle}</Text>
      <QuizList data={data} />
      <CButton
        styles={styles.quizButton}
        title={buttonTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={() => {
          Alert.alert("Quiz answered");
        }}
        disabled={buttonDisabled}
      />
    </>
  );
}

const styles = StyleSheet.create({
  // container: {
  //   backgroundColor: "white",
  //   flex: 1, //full screen
  //   alignItems: "center", //y
  //   justifyContent: "space-evenly", //x
  // },
  quizBanner: {
    flex: 1,
    resizeMode: "contain",
    backgroundColor: "red",
    marginTop: StatusBar.currentHeight || 0,
  },
  quizQuestion: {
    flex: 0.7,
    color: "black",
    fontWeight: "bold",
  },
  quizSubQuestionTitle: {
    flex: 0.3,
    color: "blue",
    fontWeight: "bold",
  },
  quizButton: {
    flex: 1,
    color: "white",
    padding: 20,
    width: "180px",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: "40px",
    fontWeight: "bold",
    textAlign: "center",
    justifyContent: "center",
  },
});

export default QuizScreen;
