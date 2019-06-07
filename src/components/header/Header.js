import React from "react";

import BuildingCosts from "../building-costs/BuildingCosts";
import ScoreCard from "../score-card/ScoreCard.js";
import OtherScores from "../other-scores/OtherScores";

import "./header.css";

const Header = ({rounds, resourceList}) => {
  const playerName = "Alex";

  return (
    <header>
      <h2 id="name">{playerName}</h2>
      <section className="header-content">
        <BuildingCosts />
        <ScoreCard rounds={rounds} />
      </section>
      <OtherScores />
    </header>
  );
};

export default Header;
