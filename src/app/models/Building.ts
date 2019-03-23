export class Building {
  built: boolean;

  constructor(
    public id: number,
    public type: string,
    public pointValue: number
  ) {
    this.built = type === "start";
  }

  build() {
    this.built = true;
  }
}
