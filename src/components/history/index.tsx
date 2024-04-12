import { useSelector } from "react-redux";
import "./style.scss";
interface State {
  interface: Interface;
}
interface Interface {
  current: string;
  history: object[];
  historyOpen: boolean;
}
function History() {
  const theme = useSelector((state: State) => state.interface.current);
  const history = useSelector((state: State) => state.interface.history);

  return (
    <div className="History">
      <div className="historyList">
        {history &&
          history.map((elem: string | object) => {
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
