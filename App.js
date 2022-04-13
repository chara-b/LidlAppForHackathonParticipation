import React from "react";
import QuizScreen from "./src/ui/screens/quizScreen";
import CMenu from "./src/ui/components/molecules/CMenu/CMenu";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ΜyEventsScreen from "./src/ui/screens/myEventsScreen";
import RefuserLevelSuccessScreen from "./src/ui/screens/refuserLevelSuccessScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <QuizScreen />
      <CMenu />
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
});
