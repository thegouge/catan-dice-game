export class Building {
  built: boolean;

  constructor(
    public id: number,
    public type: string,
    public pointValue: number
  ) {
    if (type === "start") {
      this.built = true;
    }
  }

  build() {
    this.built = true;
  }
}
