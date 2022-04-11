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

List.propTypes = {
  // Inherit from the atoms
  contentAlign: Item.propTypes.contentAlign,
  textSize: Items.propTypes.textSize,
  // own props
  renderKey: PropTypes.string,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
  data: PropTypes.arrayOf(PropTypes.object),
};

List.defaultProps = {
  // Inherit from the atoms
  contentAlign: Item.defaultProps.contentAlign,
  textSize: Items.defaultProps.textSize,
  // own props
  renderKey: "label",
  bgColor: "",
  onClick: null,
  data: [{}],
};

export default List;
