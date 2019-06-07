import React, {useState} from "react";
import {ResourcePool} from "../../exports";

import Header from "../header/Header";
import IslandMap from "../island-map/IslandMap";
import DiceBox from "../dice-box/DiceBox";

import "./player.css";

export default function Player() {
  const [rounds, setRoundScore] = useState(new Array(16).fill(0));
  const [currentRoundIndex, setRoundIndex] = useState(0);
  const [currentResources, setCurrentResources] = useState(new ResourcePool());

  const gatherResources = (resourceList) => {
    resourceList.forEach((rolledResource) => {
      currentResources.updateResource(rolledResource, 1);
    });
    const {wood, brick, wool, wheat, ore} = currentResources;
    // const wild = Math.floor(currentResources.gold / 2);
    setCurrentResources({
      ...currentResources,
      structures: {
        road: wood >= 1 && brick >= 1,
        soldier: wool >= 1 && wheat >= 1 && ore >= 1,
        settlement: wood >= 1 && brick >= 1 && wool >= 1 && wheat >= 1,
        city: wheat >= 2 && ore >= 3,
      },
    });
    console.log(this.currentResources);
  };

  const resetResources = () => {
    setCurrentResources(new ResourcePool());
  };

  const scoreBuilding = (buildingScore) => {
    setRoundScore(
      rounds.map((round, i) => {
        if (i === currentRoundIndex) return (round += buildingScore);
        else return round;
      })
    );
  };

  const endRound = () => {
    setRoundIndex(currentRoundIndex + 1);
  };

  return (
    <div className="player">
      <Header rounds={rounds} resourceList={currentResources} />

      <IslandMap
        currentResources={currentResources}
        scoreBuilding={scoreBuilding}
      />

      <DiceBox
        gatherResources={gatherResources}
        resetResources={resetResources}
        finishTurn={endRound}
      />
    </div>
  );
}
