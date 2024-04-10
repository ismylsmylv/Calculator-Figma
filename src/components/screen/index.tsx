import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

type Props = {};

function Screen({}: Props) {
  const theme = useSelector((state) => state.interface.current);
  const result = useSelector((state) => state.interface.result);
  const previous = useSelector((state) => state.interface.previous);

  return (
    <div className="Screen">
      <div className="history">{previous}</div>
      <div className="operations">
        <div
          className="equal"
          style={{ color: theme == "dark" ? "#f9f9f9" : "#373737" }}
        >
          =
        </div>
        <div
          className="current"
          style={{ color: theme == "dark" ? "#f9f9f9" : "#373737" }}
        >
          {result}
        </div>
      </div>
    </div>
  );
}

export default Screen;

// F9F9F9
