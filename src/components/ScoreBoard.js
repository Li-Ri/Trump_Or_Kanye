import React from "react";

const ScoreBoard = ({ player1, player2 }) => {
  return (
    <>
      <div className="score-board">
        <div className="player-container">
          <h2>{player1.name}</h2>
          <h3>{player1.score}</h3>
        </div>
        <div className="player-container">
          <h2>{player2.name}</h2>
          <h3>{player2.score}</h3>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
