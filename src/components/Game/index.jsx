import Board from "../Board";
import Player from "./Player";

const Game = ({ board }) => {
  return (
    <main>
      <Player num="one" />
      <div className="game">
        <Board board={board} />
      </div>
      <Player num="two" />
    </main>
  );
};

export default Game;
