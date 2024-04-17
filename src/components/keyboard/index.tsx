import { useDispatch, useSelector } from "react-redux";
import { setOperation, setResult } from "../../redux/slice";
import Button from "../button";
import "./style.scss";
interface State {
  interface: Interface;
}
interface Interface {
  current: string;
  historyOpen: boolean;
}
function Keyboard() {
  const theme = useSelector((state: State) => state.interface.current);
  const blue = theme == "dark" ? "#102C45" : "#ffffff6e";
  const darkBlue = theme == "dark" ? "rgb(9 34 56)" : "#ffffff6e";
  const textColor = theme == "dark" ? "rgb(249, 249, 249)" : "rgb(55, 55, 55)";
  const backColor = theme == "dark" ? "rgb(19,61,87)" : "#9EDBFB";
  const keysArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "0", "00"];
  const dispatch = useDispatch();
  return (
    <div
      className="Keyboard"
      style={{ color: textColor, backgroundColor: backColor }}
    >
      <div className="left">
        <div className="upper" style={{ backgroundColor: blue }}>
          <Button
            color={textColor}
            className="numberBtn"
            displayValue={"ac"}
            backgroundColor={""}
          />
          <Button
            color={textColor}
            className="changer"
            displayValue={"+/-"}
            backgroundColor={""}
          />
          <Button
            color={textColor}
            className="percent"
            displayValue={"%"}
            backgroundColor={""}
          />
          {/* <button
            className="multiply"
            style={{ color: textColor }}
            onClick={() => {
              dispatch(setOperation("%"));
            }}
          >
            %
          </button> */}
        </div>
        <div className="keys">
          {keysArr.map((elem) => {
            return (
              <Button
                backgroundColor={blue}
                color={textColor}
                className="numberBtn"
                displayValue={elem}
              />
            );
          })}
        </div>
      </div>
      <div
        className="right"
        style={{ backgroundColor: blue, color: textColor }}
      >
        <button
          className="divide"
          style={{ color: textColor }}
          onClick={() => {
            dispatch(setOperation("/"));
          }}
        >
          /
        </button>
        <button
          className="multiply"
          style={{ color: textColor }}
          onClick={() => {
            dispatch(setOperation("*"));
          }}
        >
          *
        </button>
        <button
          className="subract"
          style={{ color: textColor }}
          onClick={() => {
            dispatch(setOperation("-"));
          }}
        >
          -
        </button>
        <button
          className="add"
          style={{ color: textColor }}
          onClick={() => {
            dispatch(setOperation("+"));
          }}
        >
          +
        </button>
        <button
          className="result"
          style={{ backgroundColor: darkBlue, color: textColor }}
          onClick={() => {
            dispatch(setResult());
          }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
//
