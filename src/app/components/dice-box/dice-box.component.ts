import {Component, OnInit, Input, EventEmitter, Output} from "@angular/core";
import {Die} from "src/app/models/Die";
import {Resource} from "src/app/models/Resource";

@Component({
  selector: "app-dice-box",
  templateUrl: "./dice-box.component.html",
  styleUrls: ["./dice-box.component.css"]
})
export class DiceBoxComponent implements OnInit {
  @Input() resourceList: Resource[];

  @Output() rollEvent: EventEmitter<string[]> = new EventEmitter();
  @Output() resetResources: EventEmitter<string> = new EventEmitter();
  @Output() finishTurn: EventEmitter<string> = new EventEmitter();

  dice: Die[];
  rolls: number;

  constructor() {}

  ngOnInit() {
    this.rolls = 3;
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
    this.resetResources.emit();
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

    this.rollEvent.emit(this.dice.map((die: Die) => die.resource.name));
  }

  toggleSelect(id: number) {
    this.dice[id].selected = !this.dice[id].selected;
  }

  endRolling() {
    this.rolls = 0;
  }

  endTurn() {
    this.finishTurn.emit();
    this.reset();
  }

  reset() {
    this.rolls = 3;
    this.dice = this.dice.map((die) => {
      return new Die(die.id);
    });
  }
}
