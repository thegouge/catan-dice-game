import React from "react";
import {ResourcePool} from "../exports";

import Header from "./Header";
import IslandMap from "./IslandMap";
import DiceBox from "./DiceBox";

import "../styles/player.css";

export default class Player extends React.Component {
  state = {
    rounds: new Array(15).fill(0),
    playerTotal: 0,
    currentRoundIndex: 0,
    currentResources: new ResourcePool(),
  };

  gatherResources = (resourceList) => {
    resourceList.forEach((rolledResource) => {
      this.state.currentResources.updateResource(rolledResource, 1);
    });
    const {wood, brick, wool, wheat, ore} = this.state.currentResources;
    // const wild = Math.floor(currentResources.gold / 2);
    this.setState({
      currentResources: Object.assign(this.state.currentResources, {
        structures: {
          road: wood >= 1 && brick >= 1,
          soldier: wool >= 1 && wheat >= 1 && ore >= 1,
          settlement: wood >= 1 && brick >= 1 && wool >= 1 && wheat >= 1,
          city: wheat >= 2 && ore >= 3,
        },
      }),
    });
    console.log(this.state.currentResources);
  };

  resetResources = () => {
    this.setState({
      currentResources: new ResourcePool(),
    });
  };

  scoreBuilding = (buildingScore) => {
    const {rounds, currentRoundIndex} = this.state;
    this.setState({
      rounds: rounds.map((round, i) => {
        if (i === currentRoundIndex) return (round += buildingScore);
        else return round;
      }),
      playerTotal: rounds.reduce(
        (runningTotal, roundScore) => runningTotal + roundScore,
        buildingScore
      ),
    });
  };

  endRound = () => {
    this.setState({
      currentRoundIndex: this.state.currentRoundIndex + 1,
    });
  };
  render() {
    const {rounds, playerTotal, currentResources} = this.state;

    return (
      <div className="player">
        <Header rounds={rounds} playerTotal={playerTotal} />

        <IslandMap
          currentResources={currentResources}
          scoreBuilding={this.scoreBuilding}
        />

        <DiceBox
          gatherResources={this.gatherResources}
          resetResources={this.resetResources}
          finishTurn={this.endRound}
        />
      </div>
    );
  }
}
