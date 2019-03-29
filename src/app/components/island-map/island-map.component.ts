import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";

import {Building} from "../../models/Building";

@Component({
  selector: "app-island-map",
  templateUrl: "./island-map.component.html",
  styleUrls: ["./island-map.component.css", "./positioning.css"]
})
export class IslandMapComponent implements OnInit {
  @Input() buildingList: Building[];

  @Output() scoreBuilding: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  build(id) {
    this.buildingList[id].build();
    this.scoreBuilding.emit(this.buildingList[id].pointValue);
  }
}
