import { GameProvider } from "./context/GameContext";
import Header from "./components/Header";
import Game from "./components/Game";
import Footer from "./components/Footer";

import "./App.scss";

function App() {
  return (
    <GameProvider>
      <div className="app">
        <Header />
        <Game />
        <Footer />
      </div>
    </GameProvider>
  );
}

export default App;
