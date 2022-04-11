const Button = ({ children, textSize, bgColor, onClick }) => (
  <BaseButton
    textSize={textSize}
    bgColor={bgColor}
    onClick={onClick}
    type="button"
  >
    {children}
  </BaseButton>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  textSize: PropTypes.number,
  bgColor: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  textSize: 16,
  bgColor: "",
  onClick: null,
};

export default Button;
