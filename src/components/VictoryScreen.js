import React from "react";

import "../styles/victory-screen.css";

const VictoryScreen = () => {
  const victor = "Nobody";

  return (
    <div className="victory-screen">
      <h1>{victor} has won!!</h1>
      <p>(cue the confetti)</p>

      <h2>Would you like to play again?</h2>
    </div>
  );
};

export default VictoryScreen;
