import {Component, OnInit} from "@angular/core";

import {Die} from "../../models/Die";
import {Round} from "../../models/Round";
import {ResourcePool} from "../../models/ResourcePool";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  dice: Die[];
  rounds: Round[] = [];
  currentRoundIndex = 0;
  currentResources: ResourcePool;

  constructor() {
    this.dice = [
      new Die(0),
      new Die(1),
      new Die(2),
      new Die(3),
      new Die(4),
      new Die(5)
    ];

    for (let i = 1; i < 17; i++) {
      this.rounds.push(new Round(i));
    }

    this.currentResources = new ResourcePool();
  }

  ngOnInit() {}

  gatherResources(resourceList: string[]) {
    resourceList.forEach((rolledResource: string) => {
      this.currentResources[rolledResource]++;
    });
    const {wood, brick, wool, wheat, ore, gold} = this.currentResources;
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
