import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

type Props = {};

function History({}: Props) {
  const theme = useSelector((state) => state.interface.current);
  const result = useSelector((state) => state.interface.result);
  const previous = useSelector((state) => state.interface.previous);
  const history = useSelector((state) => state.interface.history);

  return (
    <div className="History">
      <div className="historyList">
        {history &&
          history.toReversed().map((elem) => {
            return (
              <div>
                <div
                  className="current"
                  style={{ color: theme == "dark" ? "#f9f9f9" : "#373737" }}
                >
                  {elem}
                </div>
                <div className="line"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default History;

// F9F9F9
