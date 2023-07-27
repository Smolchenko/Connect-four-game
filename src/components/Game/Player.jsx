import player_1 from "../../assets/player_1.png";
import player_2 from "../../assets/player_2.png";

const Player = ({ num }) => {
  const identificator = num === "one" ? 1 : 2;

  return (
    <div>
      <img
        src={identificator === 1 ? player_1 : player_2}
        alt={`Player ${identificator}`}
      />
      <span>Player {identificator}</span>
      <span className="score">0</span>
    </div>
  );
};

export default Player;
