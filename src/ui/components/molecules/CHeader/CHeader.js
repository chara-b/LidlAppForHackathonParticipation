import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

// checks if a number is of one only digit. this helps for the timer so we put
// an extra "0" in front of one digit seconds!
function isDigit(value) {
  return String(+value).length == 1;
}

const CHeader = ({ title }) => {
  const [seconds, setSeconds] = useState(59);
  const [minutes, setMinutes] = useState(2);

  useEffect(() => {
    const clock = setInterval(() => {
      if (seconds > 0) {
        setSeconds((seconds) => seconds - 1);
      } else if (seconds === 0 && minutes > 0) {
        setMinutes((minutes) => minutes - 1);
        setSeconds(59);
      } else if (seconds === 0 && minutes === 0) {
        clearInterval();
      }
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, [seconds, minutes]);

  return (
    <View
      style={{
        flexDirection: "row",
        height: 100,
        padding: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "green",
      }}
    >
      <Text style={[styles.title]}>{title}</Text>
      <View>
        <Text style={[styles.rightSideElement]}>{`0${minutes}:${
          isDigit(seconds) ? "0" : ""
        }${seconds} Χρόνος`}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: "23px",
    color: "black",
    fontWeight: "bold",
  },
  rightSideElement: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
  },
});
export default CHeader;
