import { Button } from "react-native";

const CButton = ({ title, onClick }) => (
  <Button title={title} style={styles.button} onPress={onClick} />
);
const styles = StyleSheet.create({
  button: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
    color: "black",
    border: "2px solid #4CAF50",
    borderRadius: "8px",
  },
});
export default CButton;
