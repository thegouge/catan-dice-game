import React from "react";

import BuildingCosts from "./BuildingCosts";
import ScoreCard from "./ScoreCard.js";
import OtherScores from "./OtherScores";

import "../styles/header.css";

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
