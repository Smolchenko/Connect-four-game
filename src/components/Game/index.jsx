import Board from "../Board";
import player_1 from "../../assets/player_1.png";
import player_2 from "../../assets/player_2.png";

const Game = () => {
  return (
    <main>
      <div>
        <img src={player_1} alt="Player 1" />
        <span>Player 1</span>
        <span>NUM</span>
      </div>
      <div className="game">
        <Board />
      </div>
      <div>
        <img src={player_2} alt="Player 2" />
        <span>Player 2</span>
        <span>NUM</span>
      </div>
    </main>
  );
};

export default Game;
