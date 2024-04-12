import { useSelector } from "react-redux";
import "./style.scss";

interface State {
  interface: Interface;
}
interface Interface {
  current: string;
  historyOpen: boolean;
  result: string;
  previous: string;
}
function Screen() {
  const theme = useSelector((state: State) => state.interface.current);
  const result = useSelector((state: State) => state.interface.result);
  const previous = useSelector((state: State) => state.interface.previous);

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
