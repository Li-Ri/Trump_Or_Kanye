import React from "react";

const Button = ({
  name,
  quoter,
  fetchQuotes,
  players,
  turn,
  setTurn,
  updateScore,
  setPlayers,
}) => {
  const checkScore = (player) => {
    console.log(player.name);
    if (player.score >= 4) {
      setPlayers[0](0);
      setPlayers[1](0);
    } else return;
  };
  const handleClick = (event) => {
    checkScore(players[turn]);
    if (name == quoter) {
      updateScore(players[turn], setPlayers[turn]);
      setTurn(Number(!turn));
      fetchQuotes();
    } else {
      setTurn(Number(!turn));
      fetchQuotes();
    }
  };
  return (
    <>
      <input type="submit" value={name} onClick={handleClick} />
    </>
  );
};

export default Button;
