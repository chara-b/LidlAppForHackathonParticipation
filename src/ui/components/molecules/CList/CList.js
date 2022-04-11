import Item from "../atoms/Item";

const List = ({ data, renderKey, textSize, bgColor, onClick }) => (
  <BaseList bgColor={bgColor} onClick={onClick}>
    {data.map((item) => (
      <Item contentAlign={contentAlign} textSize={textSize}>
        {item[renderKey]}
      </Item>
    ))}
  </BaseList>
);

export default List;
