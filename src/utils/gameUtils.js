const ROWS = 6;
const COLS = 7;

const getCellClassName = (cell) => {
  return cell !== null ? `circle ${cell}` : "circle";
};

const getIndicatorClass = (contextProp) => {
  return contextProp === "red" ? "player_one" : "player_two";
};

const createBoard = () => {
  return Array.from({ length: COLS }, () => Array(ROWS).fill(null));
};

const checkWinner = (board, col, row, currentPlayer, setWinner) => {
  const directions = [
    [0, 1], // horizontal
    [1, 0], // vertical
    [1, 1], // diagonal up-right
    [1, -1], // diagonal up-left
  ];

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

export { getCellClassName, getIndicatorClass, createBoard, checkWinner, ROWS };
