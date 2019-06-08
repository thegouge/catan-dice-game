import {Resource} from "./Resource";

// tslint:disable-next-line: class-name
export class Die {
  constructor(id: number) {
    this.id = id;
    this.selected = false;
  }
  id: number;
  resource: Resource;
  selected: boolean;
  rollResource() {
    switch (Math.round(Math.random() * 5)) {
      case 0:
        this.resource = new Resource("gold");
        break;

      case 1:
        this.resource = new Resource("wood");
        break;

      case 2:
        this.resource = new Resource("brick");
        break;

      case 3:
        this.resource = new Resource("wool");
        break;

      case 4:
        this.resource = new Resource("wheat");
        break;

      case 5:
        this.resource = new Resource("ore");
        break;

      default:
        break;
    }
  }
}
