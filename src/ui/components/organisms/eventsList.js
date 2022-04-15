import CList from "../molecules/CList/CList";
import CButton from "../../components/atoms/CButton/CButton";
import { Alert, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import CEventsList from "../molecules/CEventsList/CEventsList";

const EventsList = ({ data }) => {
  const buttonTitle = "Check-in";
  const color = "white";
  const fontWeight = "bold";
  const iconName = {
    topButton: "ios-close-circle-outline",
    bottomButton: "ios-share-social-outline",
  };
  const iconSize = { topButton: "20px", bottomButton: "20px" };
  const iconColor = { topButton: "grey", bottomButton: "grey" };
  const [buttonDisabled, setButtonDisabled] = useState(false);

  useEffect(() => {}, []);

  const onCheckIn = () => {};

  return (
    <CEventsList
      data={data}
      buttonTitle={buttonTitle}
      buttonDisabled={buttonDisabled}
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
