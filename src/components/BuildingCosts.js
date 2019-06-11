import React from "react";

import {buildingCosts} from "../exports";

import "../styles/building-costs.css";

export default function BuildingCosts() {
  const renderedCosts = buildingCosts.map((building, index) => {
    const resourceList = building.resources.map((resource, index) => (
      <img
        key={index}
        className="resource-icon"
        src={resource.imageRoute}
        alt={resource.name}
      />
    ));
    return (
      <div key={index} className="cost-box">
        <div className="name">
          <div className={building.name} />
        </div>
        {resourceList}
      </div>
    );
  });
  return <div className="cost-card">{renderedCosts}</div>;
}
