import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  Image,
  View,
  Text,
  StatusBar,
} from "react-native";
import CHeader from "../components/molecules/CHeader/CHeader";
import QuizList from "../components/organisms/quizBuilder/quizBuilder";
import CMenu from "../components/molecules/CMenu/CMenu";
import { colors } from "../defaults/defaultStyles";
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
  const buttonTitle = "Υποβολη";

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/quiz-banner.png")}
        style={styles.banner}
      />
      <QuizList data={data} />
      <CButton style={styles.button} title={buttonTitle} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1, //full screen
    alignItems: "center", //y
    justifyContent: "space-evenly", //x
  },
  banner: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  button: {
    flex: 1,
    color: "white",
    backgroundColor: "red",
    borderRadius: "8px",
    fontWeight: "bold",
    justifyContent: "center",
    border: "2px",
  },
});

export default QuizScreen;
