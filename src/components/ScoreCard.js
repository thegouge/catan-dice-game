import React from "react";

import "../styles/score-card.css";

const ScoreCard = ({rounds, playerTotal}) => {
  const roundBoxes = rounds.map((round, i) => {
    return (
      <div key={i} className={"round-box round-" + (i + 1)}>
        {round}
      </div>
    );
  });

  return (
    <div id="score-card">
      {roundBoxes}
      <div className="round-box total">Total = {playerTotal}</div>
    </div>
  );
};

export default ScoreCard;
