import { useState, useContext, useEffect } from "react";

import { GameContext } from "../../context/GameContext";
import {
  getSessionStorageData,
  setSessionStorageData,
  updateData,
} from "../../utils/gameUtils";
import player_1 from "../../assets/player_1.png";
import player_2 from "../../assets/player_2.png";

const Player = ({ type }) => {
  const { winner } = useContext(GameContext);
  const [gameData, setGameData] = useState(() =>
    getSessionStorageData("connect_four_PlayData")
  );

  const identificator = type === "red" ? 1 : 2;
  const score = gameData[`${type}_wins`];

  useEffect(() => {
    setSessionStorageData("connect_four_PlayData", gameData);
  }, [gameData]);

  useEffect(() => {
    updateData(winner, gameData, setGameData);
  }, [winner]);

  return (
    <div>
      <img
        src={identificator === 1 ? player_1 : player_2}
        alt={`Player ${identificator}`}
      />
      <span>Player {identificator}</span>
      <span className="score">{score}</span>
    </div>
  );
};

export default Player;
