const Item = ({ children, textSize, contentAlign }) => (
  <BaseItem textSize={textSize} contentAlign={contentAlign}>
    {children}
  </BaseItem>
);

Item.propTypes = {
  contentAlign: PropTypes.string,
  children: PropTypes.node.isRequired,
  textSize: PropTypes.number,
};

Item.defaultProps = {
  contentAlign: "center",
  textSize: 16,
};

export default Item;
