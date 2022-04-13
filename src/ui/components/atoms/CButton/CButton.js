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
    style={disabled ? localStyles.disabled : localStyles.notDisabled}
    disabled={disabled}
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

const localStyles = StyleSheet.create({
  disabled: {
    opacity: 0.6,
  },
  notDisabled: {
    opacity: 1,
  },
});
export default CButton;
