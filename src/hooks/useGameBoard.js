import { useState } from "react";

import { createBoard, checkWinner, ROWS } from "../utils/gameUtils"; // Adjust the import path as per your file structure

const useGameBoard = () => {
  const [board, setBoard] = useState(() => createBoard());
  const gameOver = !board.flat().includes(null);
  const [currentPlayer, setCurrentPlayer] = useState("red");
  const [winner, setWinner] = useState(null);

  function handleMove(col) {
    if (winner || board[col][0]) return;

    for (let row = ROWS - 1; row >= 0; row--) {
      if (!board[col][row]) {
        const newBoard = [...board];
        newBoard[col][row] = currentPlayer;
        setBoard(newBoard);
        checkWinner(newBoard, col, row, currentPlayer, setWinner);
        setCurrentPlayer(currentPlayer === "red" ? "yellow" : "red");
        break;
      }
    }

    console.log("board", board);
  }

  function resetGame() {
    setBoard(createBoard());
    setCurrentPlayer("red");
    setWinner(null);
  }

  return {
    board,
    gameOver,
    currentPlayer,
    setCurrentPlayer,
    winner,
    handleMove,
    resetGame,
  };
};

export default useGameBoard;
