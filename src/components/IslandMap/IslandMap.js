import React, {useState} from "react";

import {resourceList, BuildingList} from "../../exports";

import "./positioning.css";
import "./island-map.css";

const IslandMap = (props) => {
  // STATE
  const [buildingList, setBuildingList] = useState(BuildingList);

  // METHODS
  const canItBuild = (id) => {
    const building = buildingList[id];

    if (building.built) {
      return;
    } else if (
      props.currentResources.structures[building.type] &&
      buildingList[building.previousRoad].built
    ) {
      build(id);
    } else {
      alert("You can't build that!");
    }
  };

  const build = (id) => {
    setBuildingList(
      buildingList.map((building) => {
        if (building.id === id) {
          building.build();
        }
        return building;
      })
    );
    props.scoreBuilding(buildingList[id]);
  };

  // RENDER
  const buildings = buildingList.map((building) => {
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
        onClick={(e) => canItBuild(building.id)}>
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
};

export default IslandMap;
