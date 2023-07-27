import React, { createContext } from "react";

import useGameBoard from "../hooks/useGameBoard";

const GameContext = createContext();

const GameProvider = ({ children }) => {
  const gameBoard = useGameBoard();

  return (
    <GameContext.Provider value={gameBoard}>{children}</GameContext.Provider>
  );
};

export { GameProvider, GameContext };
