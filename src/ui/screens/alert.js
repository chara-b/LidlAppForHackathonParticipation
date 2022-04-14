import { View, StyleSheet, Button, Alert } from "react-native";

const AlertScreen = ({ title, msg }) => {
  const createAlertPopUp = () =>
    Alert.alert(title, msg, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  return (
    <View style={styles.container}>
      <Button title={title} onPress={createAlertPopUp} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center",
  },
});

export default AlertScreen;
