import React from "react";
import QuizScreen from "./src/ui/screens/quizScreen";
import CMenu from "./src/ui/components/molecules/CMenu/CMenu";
import { StyleSheet } from "react-native";
import ΜyEventsScreen from "./src/ui/screens/myEventsScreen";

import PinCodeScreen from "./src/ui/screens/pinCodeScreen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import RefuserLevelSuccessScreen from "./src/ui/screens/refuserLevelSuccessScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Εκδηλώσεις" component={ΜyEventsScreen} />
        <Stack.Screen name="Κωδικός" component={PinCodeScreen} />
        <Stack.Screen
          name="Επίπεδο Refuser"
          component={RefuserLevelSuccessScreen}
        />
      </Stack.Navigator>
      <CMenu />
    </NavigationContainer>
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
