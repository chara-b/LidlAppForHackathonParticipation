import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const CButton = ({
  styles,
  title,
  color,
  fontWeight,
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
      <Icon name={iconName} size={iconSize} color={iconColor} />
      <Text style={{ color, fontWeight }}>{title}</Text>
    </View>
  </TouchableOpacity>
);

export default CButton;
