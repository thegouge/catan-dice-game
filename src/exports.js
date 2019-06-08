export class Resource {
  constructor(name) {
    this.imageRoute = require(`./assets/${name}.png`);
    this.name = name;
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

export class Building {
  constructor(id, type, pointValue) {
    this.id = id;
    this.pointValue = pointValue;
    this.built = false;
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

      case "start":
        this.built = true;
        this.buildingCosts = {};
        break;

      default:
        this.buildingCosts = {};
        break;
    }
    if (type === "start") {
      this.built = true;
    }
  }

  build() {
    this.built = true;
  }
}

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
