import { View, Text, StyleSheet } from "react-native";

const CHeader = ({ title }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "green",
      }}
    >
      <Text style={[styles.title]}>{title}</Text>
      <View style={[styles.rightSideElement]}>{}</View>
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
});
export default CHeader;
