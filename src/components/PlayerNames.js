import React from "react";

const PlayerNames = ({
  setPlayer1,
  setPlayer2,
  setPlayerName,
  player1,
  player2,
}) => {
  const setNames = (event) => {
    const player1Name = event.target.player1.value;
    const player2Name = event.target.player2.value;
    setPlayerName(player1, setPlayer1, player1Name);
    setPlayerName(player2, setPlayer2, player2Name);
  };

  return (
    <>
      <form action="" class="form" onSubmit={setNames}>
        <input type="text" name="player1" />
        <input type="text" name="player2" />
        <input type="submit" />
      </form>
    </>
  );
};

export default PlayerNames;
