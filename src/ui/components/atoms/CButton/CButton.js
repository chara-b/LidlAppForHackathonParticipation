import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const CButton = ({ title, onClick, disabled, styles }) => (
  <TouchableOpacity
    onPress={() => {
      onClick;
    }}
  >
    <View style={styles}>
      <Text style={{ color: "white" }}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default CButton;
