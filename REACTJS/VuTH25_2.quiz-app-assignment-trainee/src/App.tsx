import { useState } from "react";
import StartScreen from "./components/StartScreen";
import GameScreen from "./components/GameScreen";

type Screen = "start" | "game" | "end" | "review";

function App() {
  const [screen, setScreen] = useState<Screen>("start");

  const onStart = () => {
    setScreen("game");
  };

  return (
    <>
      {screen === "start" && <StartScreen onStart={onStart} />}
      {screen === "game" && <GameScreen />}
    </>
  );
}

export default App;
