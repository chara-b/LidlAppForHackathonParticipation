import React from "react";
import QuizScreen from "./src/ui/screens/quizScreen";
import CMenu from "./src/ui/components/molecules/CMenu/CMenu";
import { SafeAreaView, StyleSheet, View } from "react-native";
import ΜyEventsScreen from "./src/ui/screens/myEventsScreen";
import RefuserLevelSuccessScreen from "./src/ui/screens/refuserLevelSuccessScreen";
import FinalScreen from "./src/ui/screens/finalScreen";
import PinCodeScreen from "./src/ui/screens/pinCodeScreen";
import RecyclerLevelSuccessScreen from "./src/ui/screens/recyclerLevelSuccessScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TryAgainScreen from "./src/ui/screens/tryAgainScreen";
import JoinMeetingScreen from "./src/ui/screens/joinMeetingScreen";
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen
          name="Quiz"
          component={QuizScreen}
          //  options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Ευχαριστούμε"
          component={FinalScreen}
          //  options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Εκδηλώσεις"
          component={ΜyEventsScreen}
          //  options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Κωδικός"
          component={PinCodeScreen}
          //  options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Επίπεδο Recycler"
          component={RecyclerLevelSuccessScreen}
          //  options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Επίπεδο Refuser"
          component={RefuserLevelSuccessScreen}
          //  options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Δοκίμασε Ξανά"
          component={TryAgainScreen}
          //  options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Εκδηλώσεις."
          component={JoinMeetingScreen}
          //  options={{ title: "Welcome" }}
        />
        {/* <QuizScreen /> */}
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
