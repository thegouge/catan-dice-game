import {Component, OnInit, Input} from "@angular/core";
import {Round} from "../../models/Round";
import {Resource} from "src/app/models/Resource";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() rounds: Round[];
  @Input() resourceList: Resource[];

  playerName = "Alex";

  constructor() {}

  ngOnInit() {}
}
