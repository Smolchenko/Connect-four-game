import Board from "../Board";
import Player from "./Player";

const Game = ({ board }) => {
  return (
    <main>
      <Player type="red" />
      <div className="game">
        <Board board={board} />
      </div>
      <Player type="yellow" />
    </main>
  );
};

export default Game;
