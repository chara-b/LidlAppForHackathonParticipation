import CList from "../molecules/CList/CList";

const QuizList = ({ data }) => {
  const handleSelectedItemId = (id) => {
    console.log(`Διάλεξες την ${id}η απάντηση`);
  };
  return <CList data={data} handleSelectedItemId={handleSelectedItemId} />;
};

export default QuizList;
