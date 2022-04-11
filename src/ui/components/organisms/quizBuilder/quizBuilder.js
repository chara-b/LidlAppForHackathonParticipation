import List from "../../molecules/CList";

const QuizList = ({ data, onClickSongHandle }) => (
  <Card>
    <div>
      <img src="../../assets/artist.png" alt="falling in reverse" />
    </div>
    <div>
      <List
        contentAlign="left"
        renderKey="title"
        onClick={onClickSongHandle}
        data={data}
      />
    </div>
  </Card>
);

export default QuizList;
