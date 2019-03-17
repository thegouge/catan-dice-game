import {Component, OnInit} from "@angular/core";
import {Die} from "../../models/die";

@Component({
  selector: "app-dice-box",
  templateUrl: "./dice-box.component.html",
  styleUrls: ["./dice-box.component.css"]
})
export class DiceBoxComponent implements OnInit {
  dice: Die[];
  rolls: number;

  constructor() {
    this.rolls = 3;
  }

  ngOnInit() {
    this.dice = [
      new Die(0),
      new Die(1),
      new Die(2),
      new Die(3),
      new Die(4),
      new Die(5)
    ];
  }

  rollDice() {
    this.dice
      .filter((die) => !die.selected)
      .forEach((die) => {
        die.rollResource();
      });
    this.rolls--;
  }

  toggleSelect(id: number) {
    this.dice[id].selected = !this.dice[id].selected;
  }
}
