import {Component, OnInit} from "@angular/core";

import {Round} from "../../models/Round";
import {ResourcePool} from "../../models/ResourcePool";
import {Resource} from "./../../models/Resource";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  rounds: Round[] = [];
  currentRoundIndex = 0;
  currentResources: ResourcePool;
  resourceList: Resource[];

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
      new Resource("gold")
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
      city: wheat >= 2 && ore >= 3
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
