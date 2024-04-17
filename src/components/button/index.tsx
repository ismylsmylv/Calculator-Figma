import { useDispatch } from "react-redux";
import { setClear, setNumber, setOperation } from "../../redux/slice";

type Props = {
  displayValue: string;
  backgroundColor: string;
  color: string;
  className: string;
};

function Button({ displayValue, backgroundColor, color, className }: Props) {
  const dispatch = useDispatch();
  return (
    <button
      style={{ backgroundColor: backgroundColor, color: color }}
      className={className}
      onClick={() => {
        displayValue == "ac"
          ? dispatch(setClear())
          : displayValue == "%"
          ? dispatch(setOperation(displayValue))
          : dispatch(setNumber(displayValue));
      }}
    >
      {displayValue}
    </button>
  );
}

export default Button;
