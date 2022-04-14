import { FlatList } from "react-native";
import { useEffect, useState } from "react";
import CListItem from "../../atoms/CListItem/CListItem";

const CList = ({ data, handleSelectedItemId }) => {
  const [selectedId, setSelectedId] = useState(0);

  const renderItem = ({ item }) => {
    const border =
      item.id === selectedId ? "2px solid black" : "1.5px solid darkblue";

    return (
      <CListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        border={{ border }}
      />
    );
  };
  useEffect(() => {
    // each time an item from the list is selected, this event is fired to get the changes from this component and send them to parent that we need the logic of enabling the button of the quiz if an answer is selected...
    handleSelectedItemId(selectedId); // this function is just a prop coming from the parent QuizList!
  }, [selectedId]);

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
    />
  );
};

export default CList;
