type Props = {
  displayValue: string;
  backgroundColor: string;
  color: string;
  className: string;
};

function Button({ displayValue, backgroundColor, color, className }: Props) {
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      className={className}
    >
      {displayValue}
    </button>
  );
}

export default Button;
