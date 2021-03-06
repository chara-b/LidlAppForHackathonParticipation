import { StyleSheet } from "react-native";

import CEventsList from "../molecules/CEventsList/CEventsList";

const EventsList = ({ data, navigation }) => {
  const buttonTitle = "Κωδικός Συμμετοχής";
  const color = "white";
  const fontWeight = "bold";
  const iconName = {
    topButton: "ios-close-circle-outline",
    bottomButton: "ios-share-social-outline",
  };
  const iconSize = { topButton: "20px", bottomButton: "20px" };
  const iconColor = { topButton: "grey", bottomButton: "grey" };

  const onCheckIn = () => {
    navigation.navigate("Κωδικός");
  };

  return (
    <CEventsList
      data={data}
      buttonTitle={buttonTitle}
      color={color}
      fontWeight={fontWeight}
      iconName={iconName}
      iconSize={iconSize}
      iconColor={iconColor}
      onClick={onCheckIn}
    ></CEventsList>
  );
};
const styles = StyleSheet.create({});
export default EventsList;
