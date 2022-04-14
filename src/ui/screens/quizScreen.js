import { StyleSheet, Image, Text, StatusBar } from "react-native";
import CHeader from "../components/molecules/CHeader/CHeader";
import QuizList from "../components/organisms/quizList";

const data = [
  {
    id: "1",
    title: "Χάρτινη για μπατονέτες",
    correctAnswer: false,
  },
  {
    id: "2",
    title: "Πλαστική τυροκαυτερής",
    correctAnswer: false,
  },
  {
    id: "3",
    title: "Χάρτινη για καλαμάκια",
    correctAnswer: true,
  },
  {
    id: "4",
    title: "Χάρτινη για γεμιστά",
    correctAnswer: false,
  },
];
function QuizScreen(props) {
  const headerTitle = "Quiz";

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
    </>
  );
}

const styles = StyleSheet.create({
  quizBanner: {
    flex: 1,
    width: "90%",
    height: "100px",
    marginTop: StatusBar.currentHeight || 0,
  },
  quizQuestion: {
    flex: 0.7,
    padding: 10,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
  quizSubQuestionTitle: {
    flex: 0.3,
    padding: 10,
    color: "blue",
    fontWeight: "bold",
  },
});

export default QuizScreen;
