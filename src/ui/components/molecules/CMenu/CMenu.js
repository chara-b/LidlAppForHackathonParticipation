import { View, Text, StyleSheet, Button } from "react-native";
import CButton from "../../atoms/CButton/CButton";

const CMenu = ({}) => {
  return (
    <View style={styles.container}>
      <CButton
        styles={styles.button}
        title={"Αρχική"}
        color={"black"}
        iconName={"home"}
        iconSize={50}
        iconColor={"black"}
      />
      <CButton
        styles={styles.button}
        title={"Αρχική"}
        color={"black"}
        iconName={"home"}
        iconSize={50}
        iconColor={"black"}
      />
      <CButton
        styles={styles.button}
        title={"Αρχική"}
        color={"black"}
        iconName={"home"}
        iconSize={50}
        iconColor={"black"}
      />
      <CButton
        styles={styles.button}
        title={"Αρχική"}
        color={"black"}
        iconName={"home"}
        iconSize={50}
        iconColor={"black"}
      />
      <CButton
        styles={styles.button}
        title={"Αρχική"}
        color={"black"}
        iconName={"home"}
        iconSize={50}
        iconColor={"black"}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    padding: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "purple",
  },
  title: {
    fontSize: "23px",
    backgroundColor: "red",
    color: "black",
    fontWeight: "bold",
  },
  rightSideElement: {
    fontSize: "15px",
    backgroundColor: "red",
    color: "black",
    fontWeight: "bold",
  },
  button: {
    width: "100%",
    height: "100%",
  },
});
export default CMenu;
