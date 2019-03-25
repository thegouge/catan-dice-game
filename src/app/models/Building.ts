export class Building {
  built: boolean;

  constructor(public id: number, public type: string, public pointValue: any) {
    if (type === "start") {
      this.built = true;
    }
  }

  build() {
    this.built = true;
  }
}
