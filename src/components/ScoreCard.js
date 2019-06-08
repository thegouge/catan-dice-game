import React from "react";

import "../styles/score-card.css";

export default function ScoreCard() {
  return (
    <div id="score-card">
      <div
      // *ngFor="let round of rounds"
      // [ngClass]="
      //   round.round ? 'round-box round-' + round.roundNumber : 'round-box total'
      // "
      >
        {/* <ng-template [ngIf]="!round.round">Total = {{ round.score }}</ng-template>
            <ng-template [ngIf]="round.score !== 0 && round.round">{{
              round.score
            }}</ng-template> */}
      </div>
    </div>
  );
}
