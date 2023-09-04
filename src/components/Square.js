// Square.js
import React from "react";
import "./Square.css"; // Import the CSS file

function Square({ value, onClick }) {
  return (
    <button
      className={`square ${value === "X" ? "x" : value === "O" ? "o" : ""}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
}

export default Square;
