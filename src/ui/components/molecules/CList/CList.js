import { FlatList, StyleSheet } from "react-native";
import { useState } from "react";
import CListItem from "../../atoms/CListItem/CListItem";

const CList = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);

  const renderItem = ({ item }) => {
    const border =
      item.id === selectedId ? "1.5px solid black" : "1.5px solid darkblue";
    //const color = item.id === selectedId ? "white" : "black";

    return (
      <CListItem
        item={item}
        onPress={() => setSelectedId(item.id)}
        border={{ border }}
      />
    );
  };

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
