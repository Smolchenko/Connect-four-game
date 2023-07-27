const Board = () => {
  return (
    <div className="board">
      {Array.from({ length: 7 }, (_, i) => (
        <div className="board-col" key={i}>
          {Array.from({ length: 6 }, (_, j) => (
            <div className="circle" key={j}></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
