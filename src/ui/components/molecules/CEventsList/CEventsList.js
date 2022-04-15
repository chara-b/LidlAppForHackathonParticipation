import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import CListItem from "../../atoms/CListItem/CListItem";
import { Foundation } from "@expo/vector-icons";

const CEventsList = ({ data }) => {
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
  });

  const renderItem = ({ item }) => {
    return (
      <View>
        <Image source={require(item.icon)} />
        <Text>{item.time}</Text>
        <Text>{item.city}</Text>
        <Text>{item.task}</Text>
        <CButton
          styles={styles.quizButton}
          title={buttonTitle}
          color={"white"}
          fontWeight={"bold"}
          onClick={onSubmit}
          disabled={buttonDisabled}
        />
        <Foundation
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={localStyles.icon}
        />
        <Foundation
          name={iconName}
          size={iconSize}
          color={iconColor}
          style={localStyles.icon}
        />
      </View>
    );
  };
  useEffect(() => {
    // each time an item from the list is selected, this event is fired to get the changes from this component and send them to parent that we need the logic of enabling the button of the quiz if an answer is selected and then later check if it is the correct one...
    handleSelectedItem(selectedItem); // this function is just a prop coming from the parent QuizList!
  }, [selectedItem]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedItem}
    />
  );
};

export default CEventsList;
