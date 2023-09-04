import React from "react";
import Square from "./Square"; // Import the Square component
import "./Board.css";

function Board({ squares, onClick }) {
  const renderSquare = (i) => {
    return <Square value={squares[i]} onClick={() => onClick(i)} />;
  };

  return (
    <div>
      <div className="board-row">
        {renderSquare(0, squares[0])}
        {renderSquare(1, squares[1])}
        {renderSquare(2, squares[2])}
      </div>
      <div className="board-row">
        {renderSquare(3, squares[3])}
        {renderSquare(4, squares[4])}
        {renderSquare(5, squares[5])}
      </div>
      <div className="board-row">
        {renderSquare(6, squares[6])}
        {renderSquare(7, squares[7])}
        {renderSquare(8, squares[8])}
      </div>
    </div>
  );
}
export default Board;
