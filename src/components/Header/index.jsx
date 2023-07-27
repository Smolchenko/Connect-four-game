import { useState, useEffect, useContext } from "react";

import { GameContext } from "../../context/GameContext";
import { getIndicatorClass } from "../../utils/gameUtils";
import connect_four from "../../assets/connect_four.png";

const Header = () => {
  const { currentPlayer, winner, resetGame } = useContext(GameContext);
  const [clicked, setClicked] = useState(false);

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
        {!winner && <span>TIME LEFT 7s</span>}
        {winner && <span className="winner">Winner is {`${winner}`}!</span>}
      </div>
      <button className={clicked && "clicked"} onClick={handleClick}>
        Restart
      </button>
    </header>
  );
};

export default Header;
