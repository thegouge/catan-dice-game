export class Round {
  round: boolean;
  roundNumber: number;
  score: number;

  constructor(inputNumber: number) {
    if (inputNumber === 16) {
      this.round = false;
      this.roundNumber = 0;
    } else {
      this.round = true;
      this.roundNumber = inputNumber;
    }
    this.score = 0;
  }
}
