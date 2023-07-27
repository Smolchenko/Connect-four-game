import { useState, useEffect, useContext } from "react";

import { GameContext } from "../../context/GameContext";
import { getIndicatorClass, switchPlayer } from "../../utils/gameUtils";
import connect_four from "../../assets/connect_four.png";

const Header = () => {
  const { currentPlayer, setCurrentPlayer, winner, resetGame, gameOver } =
    useContext(GameContext);
  const [clicked, setClicked] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(5);

  const handleClick = () => {
    setClicked(true);
    resetGame();
  };

  useEffect(() => {
    if (clicked) {
      const timeoutId = setTimeout(() => {
        setClicked(false);
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [clicked]);

  useEffect(() => {
    if (timeRemaining > 0) {
      const intervalId = setInterval(() => {
        if (!winner && !gameOver) {
          setTimeRemaining((prevTime) => prevTime - 1);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    } else {
      if (!winner || !gameOver) {
        setCurrentPlayer(() => switchPlayer(currentPlayer));
        setTimeRemaining(5);
      }
    }
  }, [currentPlayer, winner, timeRemaining, gameOver, setCurrentPlayer]);

  useEffect(() => {
    if (!winner || !gameOver) {
      setTimeRemaining(5);
    }
  }, [currentPlayer, winner, gameOver]);

  return (
    <header>
      <div className="img-container">
        <img src={connect_four} alt="Game logo" />
      </div>
      <div className="status_move">
        <span
          className={`indicator ${
            winner
              ? getIndicatorClass(winner)
              : getIndicatorClass(currentPlayer)
          }`}
        />
        {!winner && <span>TIME LEFT {timeRemaining}s</span>}
        {winner && <span className="winner">Winner is {`${winner}`}!</span>}
      </div>
      <button className={clicked ? "clicked" : undefined} onClick={handleClick}>
        Restart
      </button>
    </header>
  );
};

export default Header;
