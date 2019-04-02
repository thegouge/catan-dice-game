import {Component, OnInit, Output, EventEmitter, Input} from "@angular/core";

import {Building} from "src/app/models/Building";
import {Resource} from "src/app/models/Resource";

@Component({
  selector: "app-island-map",
  templateUrl: "./island-map.component.html",
  styleUrls: ["./island-map.component.css", "./positioning.css"]
})
export class IslandMapComponent implements OnInit {
  @Input() resourceList: Resource[];
  @Input() buildingList: Building[];

  @Output() scoreBuilding: EventEmitter<number> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  build(id) {
    this.buildingList[id].build();
    this.scoreBuilding.emit(this.buildingList[id].pointValue);
  }
}
