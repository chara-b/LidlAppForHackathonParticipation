import { View, Text, StyleSheet, Button } from "react-native";
import CButton from "../../atoms/CButton/CButton";

const CMenu = ({}) => {
  return (
    <View style={styles.container}>
      <CButton
        styles={styles.button}
        title={"Αρχική"}
        color={"grey"}
        fontWeight={"normal"}
        iconName={"home"}
        iconSize={40}
        iconColor={"grey"}
        buttonTextOverflow={styles.buttonTextOverflow}
      />
      <CButton
        styles={styles.button}
        title={"Κουπόνια"}
        color={"grey"}
        iconName={"ticket"}
        iconSize={40}
        iconColor={"grey"}
        buttonTextOverflow={styles.buttonTextOverflow}
      />
      <CButton
        styles={styles.button}
        title={"Προσφορές"}
        color={"grey"}
        iconName={"burst-sale"}
        iconSize={40}
        iconColor={"grey"}
        buttonTextOverflow={styles.buttonTextOverflow}
      />
      <CButton
        styles={styles.button}
        title={"Αντίγραφα Αγορών"}
        color={"grey"}
        iconName={"page-copy"}
        iconSize={40}
        iconColor={"grey"}
        buttonTextOverflow={styles.buttonTextOverflow}
      />
      <CButton
        styles={styles.button}
        title={"Περισσότερα"}
        color={"grey"}
        iconName={"indent-more"}
        iconSize={40}
        iconColor={"grey"}
        buttonTextOverflow={styles.buttonTextOverflow}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    padding: 10,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "white",
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
  buttonTextOverflow: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
});
export default CMenu;
