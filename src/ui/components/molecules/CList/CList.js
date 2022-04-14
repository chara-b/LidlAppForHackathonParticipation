import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import CListItem from "../../atoms/CListItem/CListItem";

const CList = ({ data, handleSelectedItem }) => {
  const [selectedItem, setSelectedItem] = useState({
    id: 0,
  });

  const renderItem = ({ item }) => {
    const border =
      item.id === selectedItem.id ? "2px solid black" : "1.5px solid darkblue";

    return (
      <CListItem
        item={item}
        onPress={() => setSelectedItem(item)}
        border={{ border }}
      />
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

export default CList;
