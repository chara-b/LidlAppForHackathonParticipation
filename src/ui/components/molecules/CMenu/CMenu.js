import { View, StyleSheet } from "react-native";
import CButton from "../../atoms/CButton/CButton";

const CMenu = () => {
  return (
    <View style={styles.container}>
      <CButton
        styles={styles.button}
        title={"Αρχική"}
        color={"grey"}
        fontWeight={"normal"}
        fontSize={10}
        iconName={"home"}
        iconSize={40}
        iconColor={"grey"}
      />
      <CButton
        styles={styles.button}
        title={"Κουπόνια"}
        color={"grey"}
        fontWeight={"normal"}
        fontSize={10}
        iconName={"ticket"}
        iconSize={40}
        iconColor={"grey"}
      />
      <CButton
        styles={styles.button}
        title={"Προσφορές"}
        color={"grey"}
        fontWeight={"normal"}
        fontSize={10}
        iconName={"burst-sale"}
        iconSize={40}
        iconColor={"grey"}
      />
      <CButton
        styles={styles.button}
        title={"Αντίγραφα Αγορών"}
        color={"grey"}
        fontWeight={"normal"}
        fontSize={10}
        iconName={"page-copy"}
        iconSize={40}
        iconColor={"grey"}
      />
      <CButton
        styles={styles.button}
        title={"Περισσότερα"}
        color={"grey"}
        fontWeight={"normal"}
        fontSize={10}
        iconName={"indent-more"}
        iconSize={40}
        iconColor={"grey"}
        // onClick={navigation.navigate("MyEventsScreen")}
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
    justifyContent: "space-between",
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
});
export default CMenu;
