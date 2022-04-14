import CList from "../molecules/CList/CList";
import CButton from "../../components/atoms/CButton/CButton";
import { Alert, StyleSheet } from "react-native";
import { useState } from "react";

const QuizList = ({ data }) => {
  const buttonTitle = "ΥΠΟΒΟΛΗ";
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [correctAnswerItem, setCorrectAnswerItem] = useState(null);

  const handleSelectedItem = (item) => {
    //if id !== 0 means the user selected something, so enable the button
    if (item.id !== 0) {
      console.log(`Διάλεξες την ${item.id}η απάντηση`);
      setButtonDisabled(false);
    }

    if (item.correctAnswer) {
      setCorrectAnswerItem(item);
    }
  };
  const onClick = () => {
    if (correctAnswerItem.correctAnswer) {
      Alert.alert(
        `Η ${correctAnswerItem.id}η είναι η σωστή απάντηση! Συγχαρητήρια! 🥳`
      );
      console.log(
        `Η ${correctAnswerItem.id}η είναι η σωστή απάντηση! Συγχαρητήρια! 🥳`
      );
    } else {
      Alert.alert(
        `Η ${correctAnswerItem.id}η δεν είναι η σωστή απάντηση... 😞`
      );
      console.log(
        `Η ${correctAnswerItem.id}η δεν είναι η σωστή απάντηση... 😞`
      );
    }
  };
  return (
    <>
      <CList data={data} handleSelectedItem={handleSelectedItem} />
      <CButton
        styles={styles.quizButton}
        title={buttonTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={onClick}
        disabled={buttonDisabled}
      />
    </>
  );
};
const styles = StyleSheet.create({
  quizButton: {
    flex: 1,
    padding: 20,
    width: "180px",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: "40px",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
});
export default QuizList;
