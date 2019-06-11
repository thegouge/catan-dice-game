import React from "react";

import {resourceList, Building} from "../exports";

import "../styles/positioning.css";
import "../styles/island-map.css";

class IslandMap extends React.Component {
  state = {
    buildingList: [
      new Building(0, "start", 0),
      new Building(1, "settlement", 3),
      new Building(2, "road", 1),
      new Building(3, "road", 1),
      new Building(4, "city", 7),
      new Building(5, "road", 1),
      new Building(6, "settlement", 4),
      new Building(7, "road", 1),
      new Building(8, "road", 1),
      new Building(9, "city", 12),
      new Building(10, "road", 1),
      new Building(11, "settlement", 5),
      new Building(12, "road", 1),
      new Building(13, "road", 1),
      new Building(14, "settlement", 7),
      new Building(15, "road", 1),
      new Building(16, "road", 1),
      new Building(17, "settlement", 9),
      new Building(18, "road", 1),
      new Building(19, "road", 1),
      new Building(20, "settlement", 11),
      new Building(21, "road", 1),
      new Building(22, "road", 1),
      new Building(23, "city", 20),
      new Building(24, "road", 1),
      new Building(25, "road", 1),
      new Building(26, "city", 30),
      new Building(27, "soldier", 1),
      new Building(28, "soldier", 2),
      new Building(29, "soldier", 3),
      new Building(30, "soldier", 4),
      new Building(31, "soldier", 5),
      new Building(32, "soldier", 6),
    ],
    blankList: [
      {
        name: "first CrossRoads",
        built: false,
      },
      {
        name: "second CrossRoads",
        built: false,
      },
      {
        name: "third CrossRoads",
        built: false,
      },
    ],
  };

  canItBuild = (id) => {
    const {buildingList, blankList} = this.state;

    if (!this.props.currentResources.structures[buildingList[id].type]) {
      alert("you can't build that with your current resources!");
      return;
    }
    switch (id) {
      case 5:
        if (blankList[0].built) {
          this.build(id);
        }
        break;

      case 10:
        if (blankList[1].built) {
          this.build(id);
        }
        break;

      case 21:
        if (blankList[2].built) {
          this.build(id);
        }
        break;

      default:
        if (buildingList[id - 1].built) {
          this.build(id);
        }
        break;
    }
  };

  build = (id) => {
    const {blankList, buildingList} = this.state;

    switch (id) {
      case 2:
        blankList[0].built = true;
        break;

      case 7:
        blankList[1].built = true;
        break;

      case 14:
        blankList[2].built = true;
        break;

      default:
        break;
    }

    buildingList[id].build();
    this.props.scoreBuilding(buildingList[id].pointValue);
    // this.forceUpdate();
  };

  render() {
    const buildings = this.state.buildingList.map((building) => {
      const points = building.pointValue ? (
        <div className="building-text">{building.pointValue}</div>
      ) : (
        <div className="building-text">&darr;</div>
      );
      return (
        <div
          key={building.id}
          className={building.built ? building.type + " built" : building.type}
          id={`building-${building.id}`}
          onClick={(e) => this.build(building.id)}>
          {points}
        </div>
      );
    });

    const resources = resourceList.map((resource) => {
      return (
        <img
          key={resource.name}
          className="resource"
          id={resource.name + "-circle"}
          src={resource.imageRoute}
          alt={resource.name + " circle"}
        />
      );
    });

    return (
      <div id="island-map">
        {buildings}
        {resources}
      </div>
    );
  }
}

export default IslandMap;
