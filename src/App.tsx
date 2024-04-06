import { useState } from "react";
import "./App.scss";
import Switch from "./components/switch";
import Keyboard from "./components/keyboard";
import Screen from "./components/screen";
import { useSelector } from "react-redux";
function App() {
  const [count, setCount] = useState(0);
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
