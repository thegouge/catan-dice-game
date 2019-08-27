import React from "react";

import {buildingCosts} from "../../exports";

import "./building-costs.css";

const BuildingCosts = () => {
  const renderedCosts = buildingCosts.map((building, i) => {
    const resourceList = building.resources.map((resource, index) => (
      <img
        key={index}
        className="resource-icon cost"
        src={resource.imageRoute}
        alt={resource.name}
      />
    ));

    return (
      <div key={i} className="cost-box">
        <div className="name">
          <div className={building.name + " cost"} />
        </div>
        {resourceList}
      </div>
    );
  });

  return <div className="cost-card">{renderedCosts}</div>;
};

export default BuildingCosts;
