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

export default Button;
