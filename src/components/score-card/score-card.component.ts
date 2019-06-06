import {Component, OnInit, Input} from "@angular/core";
import {Round} from "../../models/Round";

@Component({
  selector: "app-score-card",
  templateUrl: "./score-card.component.html",
  styleUrls: ["./score-card.component.css"],
})
export class ScoreCardComponent implements OnInit {
  @Input() rounds: Round[];

  constructor() {}

  ngOnInit() {}
}
