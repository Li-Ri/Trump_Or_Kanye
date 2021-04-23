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
      console.log(`${player.name} wins`);
      const newObj = {
        ...player,
      };
      newObj.score = 0;
      setPlayers[turn](newObj);
    } else return;
  };
  const handleClick = (event) => {
    checkScore(players[turn]);
    if (name == quoter) {
      updateScore(players[turn], setPlayers[turn]);
      setTurn(Number(!turn));
      fetchQuotes();
    } else {
      console.log("Wrong");
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
