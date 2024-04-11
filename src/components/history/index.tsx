import { useSelector } from "react-redux";
import "./style.scss";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
} from "react";
interface State {
  interface: any;
}
function History() {
  const theme = useSelector((state: State) => state.interface.current);
  const history = useSelector((state: State) => state.interface.history);

  return (
    <div className="History">
      <div className="historyList">
        {history &&
          history
            .toReversed()
            .map(
              (
                elem:
                  | string
                  | number
                  | boolean
                  | ReactElement<
                      unknown,
                      string | JSXElementConstructor<unknown>
                    >
                  | Iterable<ReactNode>
                  | ReactPortal
                  | null
                  | undefined
              ) => {
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
              }
            )}
      </div>
    </div>
  );
}

export default History;

// F9F9F9
