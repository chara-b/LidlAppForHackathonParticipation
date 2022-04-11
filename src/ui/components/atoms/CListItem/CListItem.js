import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CListItem = ({ item, onPress, border }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item]}>
    <Text style={[border, styles.text]}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 5,
    marginVertical: 2,
    marginHorizontal: 2,
    width: 250,
  },
  text: {
    borderRadius: "8px",
    padding: 17,
    fontSize: "15px",
    textAlign: "center",
    color: "darkblue",
    fontWeight: "bold",
  },
});
export default CListItem;
