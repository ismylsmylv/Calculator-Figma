import { useSelector } from "react-redux";
import "./App.scss";
import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import Switch from "./components/switch";
function App() {
  const theme = useSelector((state) => state.interface.current);
  return (
    <div
      className="container"
      style={{ backgroundColor: theme == "light" ? "#F6F6F6" : "#242627" }}
    >
      <Switch />
      <Screen />
      <Keyboard />
    </div>
  );
}

export default App;

// F6F6F6
