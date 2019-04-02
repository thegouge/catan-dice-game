import {Component, OnInit} from "@angular/core";

import {Round} from "../../models/Round";
import {ResourcePool} from "../../models/ResourcePool";
import {Building} from "../../models/Building";
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
  buildingList: Building[];
  resourceList: Resource[];

  constructor() {
    for (let i = 1; i < 17; i++) {
      this.rounds.push(new Round(i));
    }

    this.currentResources = new ResourcePool();

    this.buildingList = [
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
      new Building(32, "soldier", 6)
    ];

    this.resourceList = [
      new Resource("wood"),
      new Resource("brick"),
      new Resource("wool"),
      new Resource("wheat"),
      new Resource("ore"),
      new Resource("gold")
    ];
  }

  ngOnInit() {
    console.log(this.resourceList);
  }

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

  scoreBuilding(buildingScore: number) {
    this.rounds[this.currentRoundIndex].score += buildingScore;
  }

  endRound() {
    this.currentRoundIndex++;
  }
}
