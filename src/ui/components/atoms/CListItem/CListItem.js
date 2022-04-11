import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const CListItem = ({ item, onPress, backgroundColor, textColor, textSize }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor, textSize]}>{item.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default CListItem;
