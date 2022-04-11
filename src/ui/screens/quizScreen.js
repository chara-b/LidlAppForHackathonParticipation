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
const data = [
  {
    id: "1",
    title: "First Item",
  },
  {
    id: "2",
    title: "Second Item",
  },
  {
    id: "3",
    title: "Third Item",
  },
];
function QuizScreen(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/quiz-banner.png")}
        style={styles.banner}
      />
      <QuizList data={data} />
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
  /*logo: {
    width: "150px",
    height: "150px",
    resizeMode: "contain",
  },
  button: {
    width: "50%",
    height: "7%",
    backgroundColor: colors.secondary,
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0px -8px 20px rgba(50, 50, 50, 0.75) inset",
  },
  buttonText: { color: colors.primary, fontWeight: "bold" },*/
  banner: {
    flex: 2,
    marginTop: StatusBar.currentHeight || 0,
  },
});

export default QuizScreen;
