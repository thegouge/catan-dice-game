import {Cost} from "./Cost";

export class Building {
  built: boolean;
  buildingCosts: any;

  constructor(
    public id: number,
    public type: string,
    public pointValue: number
  ) {
    switch (type) {
      case "road":
        this.buildingCosts = {wood: 1, brick: 1};
        break;

      case "soldier":
        this.buildingCosts = {wool: 1, wheat: 1, ore: 1};
        break;

      case "settlement":
        this.buildingCosts = {wood: 1, brick: 1, wool: 1, wheat: 1};
        break;

      case "city":
        this.buildingCosts = {wheat: 2, ore: 3};
        break;

      case "start":
        this.built = true;
        this.buildingCosts = {};
        break;

      default:
        this.buildingCosts = {};
        break;
    }
    if (type === "start") {
      this.built = true;
    }
  }

  build() {
    this.built = true;
  }
}
