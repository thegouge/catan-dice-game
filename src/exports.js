export class Resource {
  constructor(name) {
    this.imageRoute = require(`./assets/${name}.png`);
    this.name = name;
  }
}

export class Building {
  constructor(id, type, pointValue, previousRoad = 0) {
    this.id = id;
    this.pointValue = pointValue;
    this.built = false;
    this.previousRoad = previousRoad;
    this.type = type;
    switch (type) {
      case "road":
        this.buildingCosts = {wood: 1, brick: 1};
        this.pointValue = 1;
        break;

      case "soldier":
        this.buildingCosts = {wool: 1, wheat: 1, ore: 1};
        break;

      case "settlement":
        this.buildingCosts = {wood: 1, brick: 1, wool: 1, wheat: 1};
        break;

      case "city":
        this.buildingCosts = {wheat: 2, ore: 3};
        break;

      default:
        this.built = true;
        this.buildingCosts = {};
        break;
    }
  }

  build() {
    this.built = true;
    console.log(`building a ${this.type}`);
  }
}

export const BuildingList = [
  new Building(0, "start", 0),
  new Building(1, "settlement", 3),
  new Building(2, "road", 1),
  new Building(3, "road", 1, 2),
  new Building(4, "city", 7, 3),
  new Building(5, "road", 1, 2),
  new Building(6, "settlement", 4, 5),
  new Building(7, "road", 1, 5),
  new Building(8, "road", 1, 7),
  new Building(9, "city", 12, 8),
  new Building(10, "road", 1, 7),
  new Building(11, "settlement", 5, 10),
  new Building(12, "road", 1, 10),
  new Building(13, "road", 1, 12),
  new Building(14, "settlement", 7, 13),
  new Building(15, "road", 1, 13),
  new Building(16, "road", 1, 15),
  new Building(17, "settlement", 9, 16),
  new Building(18, "road", 1, 16),
  new Building(19, "road", 1, 18),
  new Building(20, "settlement", 11, 18),
  new Building(21, "road", 1, 13),
  new Building(22, "road", 1, 21),
  new Building(23, "city", 20, 22),
  new Building(24, "road", 1, 22),
  new Building(25, "road", 1, 24),
  new Building(26, "city", 30, 25),
  new Building(27, "soldier", 1),
  new Building(28, "soldier", 2, 27),
  new Building(29, "soldier", 3, 28),
  new Building(30, "soldier", 4, 29),
  new Building(31, "soldier", 5, 30),
  new Building(32, "soldier", 6, 31),
];

export class ResourcePool {
  wood = 0;
  brick = 0;
  wool = 0;
  wheat = 0;
  ore = 0;
  gold = 0;
  structures = {
    road: false,
    soldier: false,
    settlement: false,
    city: false,
  };

  updateResource(type, modifier) {
    switch (type) {
      case "wood":
        this.wood += modifier;
        break;

      case "brick":
        this.brick += modifier;
        break;

      case "wool":
        this.wool += modifier;
        break;

      case "wheat":
        this.wheat += modifier;
        break;

      case "ore":
        this.ore += modifier;
        break;

      case "gold":
        this.gold += modifier;
        break;

      default:
        break;
    }
  }
}

export class Die {
  constructor(id) {
    this.id = id;
    this.selected = false;
  }
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

export const resourceList = [
  new Resource("wood"),
  new Resource("brick"),
  new Resource("wool"),
  new Resource("wheat"),
  new Resource("ore"),
  new Resource("gold"),
];

export const buildingCosts = [
  {
    name: "road",
    resources: [new Resource("wood"), new Resource("brick")],
  },
  {
    name: "soldier",
    resources: [
      new Resource("wool"),
      new Resource("wheat"),
      new Resource("ore"),
    ],
  },
  {
    name: "settlement",
    resources: [
      new Resource("wood"),
      new Resource("brick"),
      new Resource("wool"),
      new Resource("wheat"),
    ],
  },
  {
    name: "city",
    resources: [
      new Resource("wheat"),
      new Resource("wheat"),
      new Resource("ore"),
      new Resource("ore"),
      new Resource("ore"),
    ],
  },
];
