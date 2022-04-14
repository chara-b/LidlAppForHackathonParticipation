import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Timer from "../../../widgets/timer";

const CHeader = ({ title, timeOff }) => {
  const [timeoff, setTimeOff] = useState(false);
  timeOff = timeoff;
  return (
    <View
      style={{
        flexDirection: "row",
        height: 70,
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Text style={[styles.title]}>{title}</Text>
      <Timer handleTimeoff={(timeoff) => setTimeOff(timeoff)}></Timer>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: "23px",
    color: "black",
    fontWeight: "bold",
  },
});
export default CHeader;
