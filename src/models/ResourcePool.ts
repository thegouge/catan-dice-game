export class ResourcePool {
  wood = 0;
  brick = 0;
  wool = 0;
  wheat = 0;
  ore = 0;
  gold = 0;
  structures: object = {
    road: false,
    soldier: false,
    settlement: false,
    city: false
  };

  reset() {
    this.wood = 0;
    this.brick = 0;
    this.wool = 0;
    this.wheat = 0;
    this.ore = 0;
    this.gold = 0;
    this.structures = {
      road: false,
      soldier: false,
      settlement: false,
      city: false
    };
  }
}
