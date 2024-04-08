import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";
type Props = {};

function Keyboard({}: Props) {
  const theme = useSelector((state) => state.interface.current);
  const blue = theme == "dark" ? "#102C45" : "#ffffff6e";
  const darkBlue = theme == "dark" ? "rgb(9 34 56)" : "#ffffff6e";
  const textColor = theme == "dark" ? "rgb(249, 249, 249)" : "rgb(55, 55, 55)";
  const backColor = theme == "dark" ? "rgb(19,61,87)" : "#9EDBFB";

  return (
    <div
      className="Keyboard"
      style={{ color: textColor, backgroundColor: backColor }}
    >
      <div className="left">
        <div className="upper" style={{ backgroundColor: blue }}>
          <button className="ac" style={{ color: textColor }}>
            ac
          </button>
          <button className="changer" style={{ color: textColor }}>
            +/-
          </button>
          <button className="percent" style={{ color: textColor }}>
            %
          </button>
        </div>
        <div className="keys">
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            1
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            2
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            3
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            4
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            5
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            6
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            7
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            8
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            9
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            .
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            0
          </button>
          <button
            style={{ backgroundColor: blue, color: textColor }}
            className="numberBtn"
          >
            00
          </button>
        </div>
      </div>
      <div
        className="right"
        style={{ backgroundColor: blue, color: textColor }}
      >
        <button className="divide" style={{ color: textColor }}>
          /
        </button>
        <button className="multiply" style={{ color: textColor }}>
          *
        </button>
        <button className="subract" style={{ color: textColor }}>
          -
        </button>
        <button className="add" style={{ color: textColor }}>
          +
        </button>
        <button
          className="result"
          style={{ backgroundColor: darkBlue, color: textColor }}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default Keyboard;
//
