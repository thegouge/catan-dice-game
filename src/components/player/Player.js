import React from "react";

import Header from "../header/Header";
import IslandMap from "../island-map/IslandMap";
import DiceBox from "../dice-box/DiceBox";

import "./player.css";

export default function Player() {
  // rounds: Round[] = [];
  // currentRoundIndex = 0;
  // currentResources: ResourcePool;
  // resourceList: Resource[];
  // buildingCosts: Cost[];

  // constructor() {
  //   for (let i = 1; i < 17; i++) {
  //     this.rounds.push(new Round(i));
  //   }

  //   this.currentResources = new ResourcePool();

  //   this.resourceList = [
  //     new Resource("wood"),
  //     new Resource("brick"),
  //     new Resource("wool"),
  //     new Resource("wheat"),
  //     new Resource("ore"),
  //     new Resource("gold"),
  //   ];

  //   this.buildingCosts = [
  //     {
  //       name: "road",
  //       resources: ["wood", "brick"],
  //     },
  //     {
  //       name: "soldier",
  //       resources: ["wool", "wheat", "ore"],
  //     },
  //     {
  //       name: "settlement",
  //       resources: ["wood", "brick", "wool", "wheat"],
  //     },
  //     {
  //       name: "city",
  //       resources: ["wheat", "wheat", "ore", "ore", "ore"],
  //     },
  //   ];
  // }

  // ngOnInit() {}

  // gatherResources(resourceList: string[]) {
  //   resourceList.forEach((rolledResource: string) => {
  //     this.currentResources[rolledResource]++;
  //   });
  //   const {wood, brick, wool, wheat, ore, gold} = this.currentResources;
  //   const wild = Math.floor(gold / 2);
  //   this.currentResources.structures = {
  //     road: wood >= 1 && brick >= 1,
  //     soldier: wool >= 1 && wheat >= 1 && ore >= 1,
  //     settlement: wood >= 1 && brick >= 1 && wool >= 1 && wheat >= 1,
  //     city: wheat >= 2 && ore >= 3,
  //   };
  //   console.log(this.currentResources);
  // }

  // resetResources() {
  //   this.currentResources.reset();
  // }

  // scoreBuilding(buildingScore: number) {
  //   this.rounds[this.currentRoundIndex].score += buildingScore;
  // }

  // endRound() {
  //   this.currentRoundIndex++;
  // }

  return (
    <div className="player">
      <Header
      // [rounds]="rounds"
      // [resourceList]="resourceList"
      // [buildingCosts]="buildingCosts"
      />

      <IslandMap
      // [resourceList]="resourceList"
      // [currentResources]="currentResources"
      // (scoreBuilding)="scoreBuilding($event)"
      />

      <DiceBox
      // [resourceList]="resourceList"
      // (rollEvent)="gatherResources($event)"
      // (resetResources)="resetResources()"
      // (finishTurn)="endRound()"
      />
    </div>
  );
}
