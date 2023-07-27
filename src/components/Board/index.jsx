import { useContext } from "react";

import { GameContext } from "../../context/GameContext";
import { getCellClassName } from "../../utils/gameUtils";

const Board = () => {
  const { board, handleMove } = useContext(GameContext);

  return (
    <div className="board">
      {board.map((col, colIndex) => (
        <div
          key={colIndex}
          className="col"
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
