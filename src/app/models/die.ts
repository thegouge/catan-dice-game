// tslint:disable-next-line: class-name
export class Die {
  constructor(id: number) {
    this.id = id;
  }
  id: number;
  resource: string;
  selected: boolean;
  rollResource() {
    switch (Math.round(Math.random() * 5)) {
      case 0:
        this.resource = "gold";
        break;

      case 1:
        this.resource = "wood";
        break;

      case 2:
        this.resource = "brick";
        break;

      case 3:
        this.resource = "wool";
        break;

      case 4:
        this.resource = "wheat";
        break;

      case 5:
        this.resource = "ore";
        break;

      default:
        this.resource = "";
        break;
    }
  }
}
