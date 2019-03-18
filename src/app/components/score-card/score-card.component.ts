import {Component, OnInit} from "@angular/core";
import {Round} from "../../models/Round";

@Component({
  selector: "app-score-card",
  templateUrl: "./score-card.component.html",
  styleUrls: ["./score-card.component.css"]
})
export class ScoreCardComponent implements OnInit {
  rounds: Round[] = [];

  constructor() {
    for (let i = 1; i < 17; i++) {
      this.rounds.push(new Round(i));
    }
  }

  ngOnInit() {}
}
