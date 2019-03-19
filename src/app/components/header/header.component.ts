import {Component, OnInit, Input} from "@angular/core";
import {Round} from "../../models/Round";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  @Input() rounds: Round[];

  playerName = "Alex";

  constructor() {}

  ngOnInit() {}
}
