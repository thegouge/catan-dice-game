import React from "react";
// import {connect} from "react-redux";

import {ResourcePool} from "../exports";
// import {scoreRound, endTurn} from "../redux/actions/creators";

import Header from "./Header";
import IslandMap from "./IslandMap";
import DiceBox from "./DiceBox";

import "../styles/player.css";

// const mapStateToProps = (state) => {
//   return {...state};
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     scoreBuilding: (buildingScore) => dispatch(scoreRound(buildingScore)),
//     endTurn: () => dispatch(endTurn()),
//   };
// };

class Player extends React.Component {
  state = {
    rounds: new Array(15).fill(0),
    playerTotal: 0,
    currentRoundIndex: 0,
    currentResources: new ResourcePool(),
  };

  gatherResources = (resourceList) => {
    const resourcesToAdd = {
      wood: 0,
      brick: 0,
      wool: 0,
      wheat: 0,
      ore: 0,
      gold: 0,
    };
    resourceList.forEach((rolledResource) => {
      resourcesToAdd[rolledResource] = resourcesToAdd[rolledResource] + 1;
    });
    this.setState({
      currentResources: Object.assign(this.state.currentResources, {
        ...resourcesToAdd,
        structures: this.updateBuildable(resourcesToAdd),
      }),
    });
  };

  updateBuildable = (resources) => {
    const {wood, brick, wool, wheat, ore} = resources;
    // const wild = Math.floor(currentResources.gold / 2);
    return {
      road: wood >= 1 && brick >= 1,
      soldier: wool >= 1 && wheat >= 1 && ore >= 1,
      settlement: wood >= 1 && brick >= 1 && wool >= 1 && wheat >= 1,
      city: wheat >= 2 && ore >= 3,
    };
  };

  resetResources = () => {
    this.setState({
      currentResources: new ResourcePool(),
    });
  };

  scoreBuilding = (building) => {
    const newResources = {};
    for (let resource in building.buildingCosts) {
      newResources[resource] =
        this.state.currentResources[resource] -
        building.buildingCosts[resource];
    }
    this.setState({
      rounds: this.state.rounds.map((round, i) => {
        if (i === this.state.currentRoundIndex)
          return (round += building.pointValue);
        else return round;
      }),
      playerTotal: this.state.rounds.reduce(
        (runningTotal, roundScore) => runningTotal + roundScore,
        building.pointValue
      ),
      currentResources: {
        ...newResources,
        structures: this.updateBuildable(newResources),
      },
    });
    console.log(this.state.currentResources);
  };

  endTurn = () => {
    this.setState({
      currentRoundIndex: this.state.currentRoundIndex + 1,
      currentResources: new ResourcePool(),
    });
  };

  render() {
    return (
      <div className="player">
        <Header
          rounds={this.state.rounds}
          playerTotal={this.state.playerTotal}
        />

        <IslandMap
          island={this.props.island}
          currentResources={this.state.currentResources}
          scoreBuilding={this.scoreBuilding}
        />

        <DiceBox
          gatherResources={this.gatherResources}
          resetResources={this.resetResources}
          finishTurn={this.endTurn}
        />
      </div>
    );
  }
}

export default Player;
