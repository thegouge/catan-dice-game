import {Component, OnInit, Input} from "@angular/core";
import {Cost} from "React-shit/catan-dice-game/src/models/Cost";

@Component({
  selector: "app-building-costs",
  templateUrl: "./building-costs.component.html",
  styleUrls: ["./building-costs.component.css"],
})
export class BuildingCostsComponent implements OnInit {
  @Input() buildingCosts: Cost[];

  constructor() {}

  ngOnInit() {}
}
