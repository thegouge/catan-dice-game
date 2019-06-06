import React from "react";
import BuildingCosts from "../building-costs/BuildingCosts";
import ScoreCard from "../score-card/ScoreCard.js";

import "./header.css";

export default function Header() {
  // @Input() rounds: Round[];
  // @Input() resourceList: Resource[];
  // @Input() buildingCosts: Cost[];

  const playerName = "Alex";

  return (
    <header>
      <h2 id="name">{playerName}</h2>
      <section className="header-content">
        <BuildingCosts
        // buildingCosts={buildingCosts}
        />
        <ScoreCard
        // rounds={rounds}
        />
      </section>
      {/* <OtherScores />*/}
    </header>
  );
}
