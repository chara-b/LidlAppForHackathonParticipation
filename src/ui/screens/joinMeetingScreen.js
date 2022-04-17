import {
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  Alert,
  TouchableOpacity,
} from "react-native";
import CHeader from "../components/molecules/CHeader/CHeader";
import QuizList from "../components/organisms/quizList";
import CButton from "../components/atoms/CButton/CButton";
import { useState } from "react";
import CEventsList from "../components/organisms/eventsList";
import EventsList from "../components/organisms/eventsList";

function JoinMeetingScreen({ navigation }) {
  const buttonLeftTitle = "Προσεχώς";
  const buttonRightTitle = "Οι εκδηλώσεις μου";

  const [buttonState, setButtonState] = useState({
    btnSelected: "left",
  });
  const onClickLeftButton = () => {
    setButtonState({ btnSelected: "left" });
  };
  const onClickRightButton = () => {
    setButtonState({ btnSelected: "right" });
  };
  const onPress = () => {
    navigation.navigate("Κωδικός");
  };
  return (
    <>
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
      <View>
        <TouchableOpacity onPress={onPress()}>
          <Image
            source={require("../../assets/join.png")}
            style={styles.joinscreen}
          />
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  joinscreen: {
    width: "390px",
    height: "390px",
    justifyContent: "center",
    resizeMode: "contain",
    alignItems: "center",
  },
  buttonsContainer: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
    justifyContent: "space-evenly",
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

export default JoinMeetingScreen;
