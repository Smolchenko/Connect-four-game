import { useContext } from "react";

import { GameContext } from "../../context/GameContext";
import { getColClassName, getCellClassName } from "../../utils/gameUtils";

const Board = () => {
  const { winner, gameOver, board, handleMove } = useContext(GameContext);

  return (
    <div className="board">
      {board.map((col, colIndex) => (
        <div
          key={colIndex}
          className={getColClassName(gameOver, winner)}
          onClick={() => handleMove(colIndex)}
        >
          {col.map((cell, rowIndex) => (
            <div key={rowIndex} className={getCellClassName(cell)} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
