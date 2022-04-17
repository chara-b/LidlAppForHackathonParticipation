import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import Timer from "../../../widgets/timer";

const CHeader = ({ title, timeOff }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 20,
        padding: 10,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={[styles.title]}>{title}</Text>
      <>
        {timeOff !== null ? (
          <Timer handleTimeoff={(timeoff) => timeOff(timeoff)}></Timer>
        ) : (
          <></>
        )}
      </>
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
