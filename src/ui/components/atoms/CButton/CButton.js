import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Foundation } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";

const CButton = ({
  styles,
  title,
  color,
  fontWeight,
  buttonTextOverflow,
  iconName,
  iconSize,
  iconColor,
  onClick,
  disabled,
}) => (
  <TouchableOpacity
    onPress={() => {
      onClick;
    }}
  >
    <View style={styles}>
      <Foundation name={iconName} size={iconSize} color={iconColor} />
      <Text style={{ color, fontWeight, buttonTextOverflow }}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default CButton;
