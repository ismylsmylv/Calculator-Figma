import { useSelector } from "react-redux";
import "./App.scss";
import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import Switch from "./components/switch";
import History from "./components/history";
function App() {
  const theme = useSelector((state) => state.interface.current);
  const historyOpen = useSelector((state) => state.interface.historyOpen);

  return (
    <div
      className="container"
      style={{ backgroundColor: theme == "light" ? "#F6F6F6" : "#242627" }}
    >
      <Switch />
      {historyOpen ? <History /> : <Screen />}
      <Keyboard />
    </div>
  );
}

export default App;

// F6F6F6
