import { StyleSheet, Image, View, Text, StatusBar, Alert } from "react-native";
import CHeader from "../components/molecules/CHeader/CHeader";
import QuizList from "../components/organisms/quizList";
import CButton from "../components/atoms/CButton/CButton";
const data = [
  {
    id: "1",
    icon: "",
    time: "09.00πμ - 11.00πμ",
    city: "Παραλία Αλίμου, Αθήνα",
    task: "Καθαρισμός Ακτής",
  },
  {
    id: "2",
    icon: "",
    time: "10.00πμ - 12.00μμ",
    city: "Μέσω Google Meet",
    task: "Πλαστικά στις Ακτές",
  },
  {
    id: "3",
    icon: "",
    time: "1.00πμ - 13.00μμ",
    city: "Μέσω Google Meet",
    task: "Βιώσιμη Ανάπτυξη",
  },
];
function ΜyEventsScreen(props) {
  const headerTitle = "Εκδηλώσεις";
  const buttonLeftTitle = "Προσεχώς";
  const buttonRightTitle = "Οι εκδηλώσεις μου";
  const buttonCheckInTitle = "Check-in";

  const buttonDisabled = false;
  const subTitle = "Εκδηλώσεις που θα πάω";
  const notificationTitle =
    "Παρακαλούμε προβείτε σε check-in την ημέρα και ώρα έναρξης της κάθε εκδήλωσης";

  return (
    <>
      <CHeader title={headerTitle} timeOff={null} />
      <CButton
        title={buttonLeftTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={Alert.alert("Προσεχώς")}
        disabled={buttonDisabled}
      />
      <CButton
        title={buttonRightTitle}
        color={"white"}
        fontWeight={"bold"}
        onClick={Alert.alert("Οι εκδηλώσεις μου")}
        disabled={buttonDisabled}
      />
      <Text style={styles.subTitle}>{subTitle}</Text>
      <QuizList data={data} />
      <Text style={styles.notificationTitle}>{notificationTitle}</Text>
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
  subTitle: {
    flex: 0.3,
    padding: 10,
    color: "blue",
    fontWeight: "bold",
  },
  notificationTitle: {
    flex: 0.7,
    padding: 10,
    color: "black",
    fontWeight: "bold",
  },
});

export default ΜyEventsScreen;
