import {Component, OnInit, Input} from "@angular/core";
import {Round} from "../../models/Round";
import {Resource} from "React-shit/catan-dice-game/src/models/Resource";
import {Cost} from "React-shit/catan-dice-game/src/models/Cost";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() rounds: Round[];
  @Input() resourceList: Resource[];
  @Input() buildingCosts: Cost[];

  playerName = "Alex";

  constructor() {}

  ngOnInit() {}
}
