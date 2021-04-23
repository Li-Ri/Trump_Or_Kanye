import React, { useState, useEffect } from "react";
import PlayerNames from "../components/PlayerNames";
import ScoreBoard from "../components/ScoreBoard";

const QuoteContainer = () => {
  const [quote, setQuote] = useState();
  const [player1, setPlayer1] = useState({
    name: "",
    score: 0,
  });
  const [player2, setPlayer2] = useState({
    name: "",
    score: 0,
  });

  const setPlayerName = (player, setPlayer, newName) => {
    const newObj = {
      ...player,
    };
    newObj.name = newName;
    setPlayer(newObj);
  };

  const updateScore = (player, setPlayer) => {
    const newObj = {
      ...player,
    };
    newObj.score += 1;
    setPlayer(newObj);
  };

  return (
    <>
      <h1>I am the Quote Container</h1>
      {player1.name && player2.name ? (
        <ScoreBoard
          player1={player1}
          player2={player2}
          updateScore={updateScore}
        />
      ) : null}
      {player1.name && player2.name ? null : (
        <PlayerNames
          setPlayer1={setPlayer1}
          setPlayer2={setPlayer2}
          setPlayerName={setPlayerName}
          player1={player1}
          player2={player2}
        />
      )}
    </>
  );
};

export default QuoteContainer;
