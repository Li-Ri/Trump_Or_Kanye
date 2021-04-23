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
  const handleClick = (event) => {
    event.preventDefault();
    console.log(quoter, name);
    if (name == quoter) {
      updateScore(players[turn], setPlayers[turn]);
      console.log(players[turn]);
      setTurn(Number(!turn));
      fetchQuotes();
    } else {
      console.log("Wrong");
      setTurn(Number(!turn));
      fetchQuotes();
    }
  };
  return (
    <>
      <h2>
        <input type="submit" value={name} onClick={handleClick} />
      </h2>
    </>
  );
};

export default Button;
