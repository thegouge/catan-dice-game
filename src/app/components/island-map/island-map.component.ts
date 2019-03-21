import {Component, OnInit} from "@angular/core";

import {Building} from "../../models/Building";

@Component({
  selector: "app-island-map",
  templateUrl: "./island-map.component.html",
  styleUrls: ["./island-map.component.css"]
})
export class IslandMapComponent implements OnInit {
  buildingList: Building[];

  constructor() {
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
  }

  ngOnInit() {}
}
