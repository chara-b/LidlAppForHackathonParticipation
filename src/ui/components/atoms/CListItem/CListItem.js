const Item = ({ children, textSize, contentAlign }) => (
  <BaseItem textSize={textSize} contentAlign={contentAlign}>
    {children}
  </BaseItem>
);

export default Item;
