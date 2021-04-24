import React from "react";
import kanye from "../kanye.png";
import donny from "../donny.png";

const PlayerNames = ({
  setPlayer1,
  setPlayer2,
  setPlayerName,
  player1,
  player2,
}) => {
  const setNames = (event) => {
    event.preventDefault();
    const player1Name = event.target.player1.value;
    const player2Name = event.target.player2.value;
    setPlayerName(player1, setPlayer1, player1Name);
    setPlayerName(player2, setPlayer2, player2Name);
  };

  return (
    <>
      <div className="player-names-container">
        <img src={kanye} alt="" className="head-img rotate" />
        <form action="" className="form" onSubmit={setNames}>
          <input
            type="text"
            className="player-input"
            name="player1"
            placeholder="Enter Player 1 Name"
          />
          <input
            type="text"
            className="player-input"
            name="player2"
            placeholder="Enter Player 2 Name"
          />
          <input
            className="player-input-button"
            type="submit"
            value="Let's Play!!"
          />
        </form>
        <img src={donny} alt="" className="head-img-donny rotate" />
      </div>
    </>
  );
};

export default PlayerNames;
