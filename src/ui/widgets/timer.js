import { useEffect, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";

// checks if a number is of one only digit. this helps for the timer so we put
// an extra "0" in front of one digit seconds!
function isDigit(value) {
  return String(+value).length == 1;
}

const Timer = ({ handleTimeoff }) => {
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
        Alert.alert("Time's off! You lost the quiz! ⏲️");
        console.log("Time's off! You lost the quiz! ⏲️");
        handleTimeoff = true;
        clearInterval(clock);
      }
    }, 1000);

    return () => {
      clearInterval(clock);
    };
  }, [seconds, minutes]);

  return (
    <View>
      <Text style={[styles.timer]}>{`0${minutes}:${
        isDigit(seconds) ? "0" : ""
      }${seconds} Χρόνος`}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  timer: {
    fontSize: "15px",
    color: "black",
    fontWeight: "bold",
  },
});
export default Timer;
