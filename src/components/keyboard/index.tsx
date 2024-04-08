import React from "react";
import "./style.scss";
type Props = {};

function Keyboard({}: Props) {
  return (
    <div className="Keyboard">
      <div className="left">
        <div className="upper">
          <button className="ac">ac</button>
          <button className="changer">+/-</button>
          <button className="percent">%</button>
        </div>
        <div className="keys">
          <button className="numberBtn">1</button>
          <button className="numberBtn">2</button>
          <button className="numberBtn">3</button>
          <button className="numberBtn">4</button>
          <button className="numberBtn">5</button>
          <button className="numberBtn">6</button>
          <button className="numberBtn">7</button>
          <button className="numberBtn">8</button>
          <button className="numberBtn">9</button>
          <button className="numberBtn">.</button>
          <button className="numberBtn">0</button>
          <button className="numberBtn">00</button>
        </div>
      </div>
      <div className="right">
        <button className="divide">/</button>
        <button className="multiply">*</button>
        <button className="subract">-</button>
        <button className="add">+</button>
        <button className="result">=</button>
      </div>
    </div>
  );
}

export default Keyboard;
