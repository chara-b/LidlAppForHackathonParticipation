import CList from "../molecules/CList/CList";

const QuizList = ({ data }) => {
  const handleSelectedItemId = (id) => {
    console.log(id);
  };
  return <CList data={data} handleSelectedItemId={handleSelectedItemId} />;
};

export default QuizList;
