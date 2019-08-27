import React from "react";

import BuildingCosts from "../BuildingCosts";
import ScoreCard from "../ScoreCard";
import OtherScores from "../OtherScores";

import "./header.css";

const Header = ({rounds, playerTotal}) => {
  const playerName = "Alex";

  return (
    <header>
      <h2 className="player-name">{playerName}</h2>
      <section className="header-content">
        <BuildingCosts />
        <ScoreCard rounds={rounds} playerTotal={playerTotal} />
      </section>
      <OtherScores />
    </header>
  );
};

export default Header;
