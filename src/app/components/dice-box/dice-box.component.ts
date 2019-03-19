import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {Die} from "../../models/Die";

@Component({
  selector: "app-dice-box",
  templateUrl: "./dice-box.component.html",
  styleUrls: ["./dice-box.component.css"]
})
export class DiceBoxComponent implements OnInit {
  @Input() dice: Die[];
  @Output() finishedRolling: EventEmitter<string[]> = new EventEmitter();
  rolls: number;

  constructor() {}

  ngOnInit() {
    this.rolls = 3;
  }

  rollDice() {
    this.dice
      .filter((die) => !die.selected)
      .forEach((die) => {
        die.rollResource();
      });
    if (this.rolls === 1) {
      this.endRolling();
    } else {
      this.rolls--;
    }
  }

  toggleSelect(id: number) {
    this.dice[id].selected = !this.dice[id].selected;
  }

  endRolling() {
    this.rolls = 0;
    this.finishedRolling.emit(this.dice.map((die: Die) => die.resource));
  }
}
