import React from "react";

const ScoreBoard = ({ player1, player2, turn }) => {
  let player1container = "player-container";
  let player2container = "player-container";
  if (!turn) {
    player1container += " highlight";
  } else player2container += " highlight";

  return (
    <>
      <div className="score-board">
        <div className={player1container}>
          <h2 className="player-name">{player1.name}</h2>
          <h3>score:{player1.score}</h3>
        </div>
        <div className={player2container}>
          <h2 className="player-name">{player2.name}</h2>
          <h3>score:{player2.score}</h3>
        </div>
      </div>
    </>
  );
};

export default ScoreBoard;
