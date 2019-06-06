import React from "react";

import "./dice-box.css";

export default function DiceBoxComponent() {
  // @Input() resourceList: Resource[];

  // @Output() rollEvent: EventEmitter<string[]> = new EventEmitter();
  // @Output() resetResources: EventEmitter<string> = new EventEmitter();
  // @Output() finishTurn: EventEmitter<string> = new EventEmitter();

  // dice: Die[];
  // rolls: number;

  // ngOnInit = () => {
  //   this.rolls = 3;
  //   this.dice = [
  //     new Die(0),
  //     new Die(1),
  //     new Die(2),
  //     new Die(3),
  //     new Die(4),
  //     new Die(5),
  //   ];
  // }

  // rollDice = () => {
  //   this.resetResources.emit();
  //   this.dice
  //     .filter((die) => !die.selected)
  //     .forEach((die) => {
  //       die.rollResource();
  //     });

  //   if (this.rolls === 1) {
  //     this.endRolling();
  //   } else {
  //     this.rolls--;
  //   }

  //   this.rollEvent.emit(this.dice.map((die: Die) => die.resource.name));
  // }

  // toggleSelect = (id) => {
  //   this.dice[id].selected = !this.dice[id].selected;
  // }

  // endRolling = () => {
  //   this.rolls = 0;
  // }

  // endTurn = () => {
  //   this.finishTurn.emit();
  //   this.reset();
  // }

  // reset = () => {
  //   this.rolls = 3;
  //   this.dice = this.dice.map((die) => {
  //     return new Die(die.id);
  //   });
  // }

  return (
    <div className="component">
      <div id="dice-list">
        <div
        // [ngClass]="die.selected ? 'selected die' : 'die'"
        // (click)="toggleSelect(die.id)"
        // *ngFor="let die of dice"
        >
          {/* <ng-template [ngIf]="die.resource">
        <img
          class="resource-icon"
          [attr.id]="die.resource.name + '-icon'"
          [src]="die.resource.imageRoute"
          [alt]="die.resource.name"
        />
      </ng-template> */}
        </div>
      </div>
      <br />
      <div
        id="toolbox"
        // *ngIf="rolls > 0; else elseblock"
      >
        <button
          id="roll"
          // (click)="rollDice()"
        >
          Roll!
        </button>
        {/* <ng-template [ngIf]="rolls < 3">
      <button id="build" (click)="endRolling()">Start Building!</button>
      <p>Rolls Left: {{ rolls }}</p>
    </ng-template> */}
      </div>
      {/* <ng-template #elseblock>
    <button id="passTurn" (click)="endTurn()">End Turn</button>
  </ng-template> */}
    </div>
  );
}
