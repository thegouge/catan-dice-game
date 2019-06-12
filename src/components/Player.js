import React from "react";
import {connect} from "react-redux";

import {ResourcePool} from "../exports";
import {scoreRound, endTurn} from "../redux/actions/creators";

import Header from "./Header";
import IslandMap from "./IslandMap";
import DiceBox from "./DiceBox";

import "../styles/player.css";

const mapStateToProps = (state) => {
  return {...state};
};
const mapDispatchToProps = (dispatch) => {
  return {
    scoreBuilding: (buildingScore) => dispatch(scoreRound(buildingScore)),
    endTurn: () => dispatch(endTurn()),
  };
};

const Player = ({
  rounds,
  playerTotal,
  currentRoundIndex,
  currentResources,
  scoreBuilding,
  endTurn,
}) => {
  const gatherResources = (resourceList) => {
    resourceList.forEach((rolledResource) => {
      currentResources.updateResource(rolledResource, 1);
    });
    const {wood, brick, wool, wheat, ore} = currentResources;
    // const wild = Math.floor(currentResources.gold / 2);
    this.setState({
      currentResources: Object.assign(currentResources, {
        structures: {
          road: wood >= 1 && brick >= 1,
          soldier: wool >= 1 && wheat >= 1 && ore >= 1,
          settlement: wood >= 1 && brick >= 1 && wool >= 1 && wheat >= 1,
          city: wheat >= 2 && ore >= 3,
        },
      }),
    });
  };

  const resetResources = () => {
    this.setState({
      currentResources: new ResourcePool(),
    });
  };

  // const scoreBuilding = (buildingScore) => {
  //   this.setState({
  //     rounds: rounds.map((round, i) => {
  //       if (i === currentRoundIndex) return (round += buildingScore);
  //       else return round;
  //     }),
  //     playerTotal: rounds.reduce(
  //       (runningTotal, roundScore) => runningTotal + roundScore,
  //       buildingScore
  //     ),
  //   });
  // };

  // const endRound = () => {
  //   this.setState({
  //     currentRoundIndex: currentRoundIndex + 1,
  //     currentResources: new ResourcePool(),
  //   });
  // };

  return (
    <div className="player">
      <Header rounds={rounds} playerTotal={playerTotal} />

      <IslandMap
        currentResources={currentResources}
        scoreBuilding={scoreBuilding}
      />

      <DiceBox
        gatherResources={gatherResources}
        resetResources={resetResources}
        finishTurn={endTurn}
      />
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Player);
