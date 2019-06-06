import {Component, OnInit} from "@angular/core";

import {Round} from "React-shit/catan-dice-game/src/models/Round";
import {ResourcePool} from "React-shit/catan-dice-game/src/models/ResourcePool";
import {Resource} from "React-shit/catan-dice-game/src/models/Resource";
import {Cost} from "React-shit/catan-dice-game/src/models/Cost";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"],
})
export class PlayerComponent implements OnInit {
  rounds: Round[] = [];
  currentRoundIndex = 0;
  currentResources: ResourcePool;
  resourceList: Resource[];
  buildingCosts: Cost[];

  constructor() {
    for (let i = 1; i < 17; i++) {
      this.rounds.push(new Round(i));
    }

    this.currentResources = new ResourcePool();

    this.resourceList = [
      new Resource("wood"),
      new Resource("brick"),
      new Resource("wool"),
      new Resource("wheat"),
      new Resource("ore"),
      new Resource("gold"),
    ];

    this.buildingCosts = [
      {
        name: "road",
        resources: ["wood", "brick"],
      },
      {
        name: "soldier",
        resources: ["wool", "wheat", "ore"],
      },
      {
        name: "settlement",
        resources: ["wood", "brick", "wool", "wheat"],
      },
      {
        name: "city",
        resources: ["wheat", "wheat", "ore", "ore", "ore"],
      },
    ];
  }

  ngOnInit() {}

  gatherResources(resourceList: string[]) {
    resourceList.forEach((rolledResource: string) => {
      this.currentResources[rolledResource]++;
    });
    const {wood, brick, wool, wheat, ore, gold} = this.currentResources;
    const wild = Math.floor(gold / 2);
    this.currentResources.structures = {
      road: wood >= 1 && brick >= 1,
      soldier: wool >= 1 && wheat >= 1 && ore >= 1,
      settlement: wood >= 1 && brick >= 1 && wool >= 1 && wheat >= 1,
      city: wheat >= 2 && ore >= 3,
    };
    console.log(this.currentResources);
  }

  resetResources() {
    this.currentResources.reset();
  }

  scoreBuilding(buildingScore: number) {
    this.rounds[this.currentRoundIndex].score += buildingScore;
  }

  endRound() {
    this.currentRoundIndex++;
  }
}
