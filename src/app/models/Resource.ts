export class Resource {
  imageRoute: string;

  constructor(name: string) {
    this.imageRoute = `../../../assets/${name}.png`;
  }
}
