export class Building {
  built: boolean;

  constructor(
    public id: number,
    public type: string,
    public pointValue: number
  ) {
    this.built = false;
  }

  build() {
    this.built = true;
  }
}
