import React, { useState, useEffect } from "react";
import PlayerNames from "../components/PlayerNames";
import ScoreBoard from "../components/ScoreBoard";

const QuoteContainer = () => {
  const [turn, setTurn] = useState(0);
  const [quote, setQuote] = useState("");
  const [quoter, setQuoter] = useState("");
  const [player1, setPlayer1] = useState({
    name: "",
    score: 0,
  });
  const [player2, setPlayer2] = useState({
    name: "",
    score: 0,
  });

  const fetchQuotes = () => {
    const random = Math.floor(Math.random() * 2);

    if (random === 0) {
      fetch("https://api.kanye.rest/")
        .then((res) => res.json())
        .then((resJson) => setQuote(resJson.quote));
      setQuoter("Kanye");
    } else {
      fetch("https://api.whatdoestrumpthink.com/api/v1/quotes/random")
        .then((res) => {
          return res.json();
        })
        .then((resJson) => setQuote(resJson.message));
      setQuoter("Trump");
    }
  };

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

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <>
      <h1>{quote}</h1>

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
