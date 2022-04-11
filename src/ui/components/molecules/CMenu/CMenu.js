import { View, Text, StyleSheet } from "react-native";
import CButton from "../../atoms/CButton/CButton";

const CHeader = ({ title }) => {
  const buttonTitle = "Υποβολη";
  return (
    <View
      style={{
        flexDirection: "row",
        height: 70,
        padding: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "purple",
      }}
    >
      <CButton style={styles.button} title={buttonTitle} />
      <CButton style={styles.button} title={buttonTitle} />
      <CButton style={styles.button} title={buttonTitle} />
      <CButton style={styles.button} title={buttonTitle} />
      <CButton style={styles.button} title={buttonTitle} />
    </View>
  );
};
const styles = StyleSheet.create({
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
    width: 100,
    height: 100,
  },
});
export default CHeader;
