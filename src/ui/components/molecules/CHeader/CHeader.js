import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Timer from "../../../widgets/timer";

const CHeader = (props) => {
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
      <Text style={[styles.title]}>{props.title}</Text>
      <Timer></Timer>
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
