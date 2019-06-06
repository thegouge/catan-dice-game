import React from "react";

import "./building-costs.css";

export default function BuildingCosts() {
  return (
    <div className="cost-card">
      <div className="cost-box">
        {" "}
        {/* ngFor="let cost of buildingCosts" */}
        <div className="name">
          <div>{/* [ngClass]="cost.name" */}</div>
        </div>
        <img
          // *ngFor="let resource of cost.resources"
          className="resource-icon"
          // [src]="'assets/' + resource + '.png'"
          alt="resource"
        />
      </div>
    </div>
  );
}
