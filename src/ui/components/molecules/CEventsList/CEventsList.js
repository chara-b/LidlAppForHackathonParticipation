import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import CButton from "../../atoms/CButton/CButton";

const CEventsList = ({
  data,
  buttonTitle,
  buttonDisabled,
  color,
  fontWeight,
  iconName,
  iconSize,
  iconColor,
  onClick,
}) => {
  //   const [selectedItem, setSelectedItem] = useState({
  //     id: 0,
  //   });

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image
          source={require("../../../../assets/1-calendar-icon.png")}
          style={styles.eventCalendarIcon}
        />
        <View style={styles.content}>
          <Text style={{ color: "rgb(105,105,105)", fontWeight }}>
            {item.time}
          </Text>
          <Text style={{ color: "rgb(0,191,255)", fontWeight }}>
            {item.city}
          </Text>
          <Text style={{ color: "rgb(25,25,112)", fontWeight }}>
            {item.task}
          </Text>
          <CButton
            styles={styles.button}
            title={buttonTitle}
            color={color}
            fontWeight={fontWeight}
            onClick={onClick}
            disabled={buttonDisabled}
          />
        </View>
        <View style={styles.rightVerticalButtons}>
          <Ionicons
            name={iconName.topButton}
            size={iconSize.topButton}
            color={iconColor.topButton}
          />
          <Ionicons
            name={iconName.bottomButton}
            size={iconSize.bottomButton}
            color={iconColor.bottomButton}
          />
        </View>
      </View>
    );
  };
  //   useEffect(() => {
  //     // each time an item from the list is selected, this event is fired to get the changes from this component and send them to parent that we need the logic of enabling the button of the quiz if an answer is selected and then later check if it is the correct one...
  //     handleSelectedItem(selectedItem); // this function is just a prop coming from the parent QuizList!
  //   }, [selectedItem]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      // extraData={selectedItem}
    />
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: "10px",
    width: "100%",
  },
  content: {
    flex: 10,
  },
  rightVerticalButtons: {
    flex: 1,
  },
  button: {
    flex: 1,
    padding: 10,
    width: "100px",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: "40px",
    textAlign: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  eventCalendarIcon: {
    flex: 5,
    resizeMode: "contain",
  },
});
export default CEventsList;
