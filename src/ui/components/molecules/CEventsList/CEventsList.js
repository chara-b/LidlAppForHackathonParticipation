import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import CButton from "../../atoms/CButton/CButton";

const CEventsList = ({
  data,
  buttonTitle,
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
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  //var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  //var yyyy = today.getFullYear();

  //today = mm + "/" + dd + "/" + yyyy;

  const renderItem = ({ item }) => {
    const disabled = +dd === +item.date.split(" ")[0] ? false : true;
    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../../../../assets/1-calendar-icon.png")}
          style={styles.eventCalendarIcon}
        >
          <View
            style={{
              position: "absolute",
              top: "35%",
              left: "35%",
              right: "35%",
              bottom: "35%",
              justifyContent: "center",
              alignItems: "center",
              width: "30px",
              textAlign: "center",
            }}
          >
            <Text style={{ fontWeight: "bold" }}>{item.date}</Text>
          </View>
        </ImageBackground>
        {/* <Image
          source={require("../../../../assets/1-calendar-icon.png")}
          style={styles.eventCalendarIcon}
        /> */}
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
            styles={[
              styles.button,
              { backgroundColor: disabled ? "grey" : "rgb(26,115,232)" },
            ]}
            title={buttonTitle}
            color={color}
            fontWeight={fontWeight}
            onClick={onClick}
            disabled={disabled}
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

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
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
    padding: 9,
    width: "180px",
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
