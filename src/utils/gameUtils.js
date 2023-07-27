const ROWS = 6;
const COLS = 7;

const directions = [
  [0, 1],
  [1, 0],
  [1, 1],
  [1, -1],
];

const getCellClassName = (cell) => {
  return cell !== null ? `circle ${cell}` : "circle";
};

const getColClassName = (gameOver, winner) => {
  return gameOver || winner ? `col sealed` : "col";
};

const getIndicatorClass = (contextProp) => {
  return contextProp === "red" ? "player_one" : "player_two";
};

const createBoard = () => {
  return Array.from({ length: COLS }, () => Array(ROWS).fill(null));
};

const checkWinner = (board, col, row, currentPlayer, setWinner) => {
  for (const [dy, dx] of directions) {
    let count = 1;
    count += checkDirection(board, col, row, dy, dx);
    count += checkDirection(board, col, row, -dy, -dx);
    if (count >= 4) {
      setWinner(currentPlayer);
      break;
    }
  }
};

const checkDirection = (board, col, row, dy, dx) => {
  const color = board[col][row];
  let count = 0;
  let newCol = col + dy;
  let newRow = row + dx;

  while (
    newCol >= 0 &&
    newCol < COLS &&
    newRow >= 0 &&
    newRow < ROWS &&
    board[newCol][newRow] === color
  ) {
    count++;
    newCol += dy;
    newRow += dx;
  }

  return count;
};

const playDataDefault = {
  red_wins: 0,
  yellow_wins: 0,
};

const getSessionStorageData = (key) => {
  try {
    const data = JSON.parse(sessionStorage.getItem(key));
    return data || playDataDefault;
  } catch (error) {
    console.error(`Error parsing local storage data for ${key}:`, error);
    return playDataDefault;
  }
};

const setSessionStorageData = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

const updateData = (winner, gameData, setGameData) => {
  let updatedPlayData;

  if (winner) {
    updatedPlayData = {
      ...gameData,
      [`${winner}_wins`]: gameData[`${winner}_wins`] + 1,
    };

    setSessionStorageData("connect_four_PlayData", updatedPlayData);
    setGameData(updatedPlayData);
  }
};

export {
  getCellClassName,
  getColClassName,
  getIndicatorClass,
  createBoard,
  checkWinner,
  ROWS,
  getSessionStorageData,
  setSessionStorageData,
  updateData,
};
