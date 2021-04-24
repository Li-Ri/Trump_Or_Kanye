import React, { useState, useEffect } from "react";
import PlayerNames from "../components/PlayerNames";
import ScoreBoard from "../components/ScoreBoard";
import Quote from "../components/Quote";
import Button from "../components/Button";
import "../App.css";

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
    console.log(random);
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
      <h1 id="main-title">Trump or Kanye</h1>
      {player1.name && player2.name ? (
        <ScoreBoard player1={player1} player2={player2} turn={turn} />
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
      {player1.name && player2.name ? <Quote quote={quote} /> : null}
      <div className="buttons">
        {player1.name && player2.name ? (
          <Button
            name={"Trump"}
            fetchQuotes={fetchQuotes}
            players={[player1, player2]}
            setPlayers={[setPlayer1, setPlayer2]}
            turn={turn}
            setTurn={setTurn}
            updateScore={updateScore}
            quoter={quoter}
          />
        ) : null}
        {player1.name && player2.name ? (
          <Button
            name={"Kanye"}
            fetchQuotes={fetchQuotes}
            players={[player1, player2]}
            setPlayers={[setPlayer1, setPlayer2]}
            turn={turn}
            setTurn={setTurn}
            updateScore={updateScore}
            quoter={quoter}
          />
        ) : null}
      </div>
      {player1.score || player2.score === 3 ? <h2>STOP THE COUNT!!</h2> : null}
    </>
  );
};

export default QuoteContainer;
