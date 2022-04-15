import { FlatList, View } from "react-native";
import { useEffect, useState } from "react";
import { Foundation } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const CEventsList = ({
  data,
  buttonTitle,
  buttonDisabled,
  color,
  fontWeight,
  iconName,
  iconSize,
  iconColor,
}) => {
  //   const [selectedItem, setSelectedItem] = useState({
  //     id: 0,
  //   });

  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <Image source={require(item.icon)} />
        <View style={styles.content}>
          <Text>{item.time}</Text>
          <Text>{item.city}</Text>
          <Text>{item.task}</Text>
          <CButton
            styles={styles.button}
            title={buttonTitle}
            color={color}
            fontWeight={fontWeight}
            onClick={onSubmit}
            disabled={buttonDisabled}
          />
        </View>
        <View style={styles.rightVerticalButtons}>
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
          <Ionicons name={iconName} size={iconSize} color={iconColor} />
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
  },
  content: {
    flex: 1,
  },
  rightVerticalButtons: {
    flex: 1,
  },
  button: {
    flex: 1,
    padding: 20,
    width: "180px",
    backgroundColor: "rgb(26,115,232)",
    borderRadius: "40px",
    textAlign: "center",
    justifyContent: "center",
    marginBottom: "10px",
  },
});
export default CEventsList;
