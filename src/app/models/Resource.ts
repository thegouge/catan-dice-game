export class Resource {
  imageRoute: string;
  name: string;

  constructor(name: string) {
    this.imageRoute = `assets/${name}.png`;
    this.name = name;
  }
}
