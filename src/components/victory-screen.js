import React from "react";

import "../styles/victory-screen.css";

export default function VictoryScreenComponent() {
  const victor = "Nobody";

  return (
    <div>
      <h1>{{victor}} has won!!</h1>
      <p style={{"text-align": "center"}}>(cue the confetti)</p>

      <h2>Would you like to play again?</h2>
    </div>
  );
}
