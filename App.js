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
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    // <SafeAreaView style={styles.container}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="QuizScreen"
          component={QuizScreen}
          //  options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="MyEventsScreen"
          component={ΜyEventsScreen}
          //  options={{ title: "Welcome" }}
        />
        {/* <QuizScreen /> */}
      </Stack.Navigator>
      <CMenu />
    </NavigationContainer>

    // {/* </SafeAreaView> */}
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
