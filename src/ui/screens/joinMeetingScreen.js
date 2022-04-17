import { StyleSheet, Image, View, Text, StatusBar, Alert } from "react-native";
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
        <Image
          source={require("../../assets/join.png")}
          style={styles.joinscreen}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  joinscreen: {
    flex: 1,
    width: "100%",
    height: "100%",
  },
  buttonsContainer: {
    width: "100%",
    height: "8%",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  subTitle: {
    flex: 1,
    color: "rgb(25,25,112)",
    fontWeight: "bold",
    marginBottom: "10px",
    marginLeft: "25px",
  },
  notificationTitle: {
    flex: 1,
    color: "rgb(105,105,105)",
    fontWeight: "bold",
    padding: "20px",
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
