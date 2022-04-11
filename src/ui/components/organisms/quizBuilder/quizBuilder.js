import { SafeAreaView } from "react-native";
import CList from "../../molecules/CList";
const data = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "First Item",
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Second Item",
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Third Item",
  },
];
const QuizList = ({ data, onClickSongHandle }) => {
  <SafeAreaView>
    <Image
      source={require("../../assets/quiz-banner.png")}
      style={styles.banner}
    />
    <div>
      <CList
        contentAlign="left"
        renderKey="answerText"
        onClick={onClickSongHandle}
        data={data}
      />
    </div>
  </SafeAreaView>;
};
const styles = StyleSheet.create({
  banner: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
});
export default QuizList;
