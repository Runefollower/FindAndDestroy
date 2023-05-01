import { Schema, type, MapSchema, ArraySchema } from "@colyseus/schema";

export class Player extends Schema {
  @type("number")
  x: number;

  @type("number")
  y: number;

  @type("number")
  vx: number;

  @type("number")
  vy: number;

  @type("number")
  direction: number;

  @type("number")
  vr: number;

  @type("number")
  accel: number;

  constructor(x: number, y: number) {
    super();
    this.x = x;
    this.y = y;
    this.vx = 0.0;
    this.vy = 0.0;
    this.direction = 0.0;
    this.vr = 0.0;
    this.accel = 0.0;
  }
}

export class Laser extends Schema {
  @type("number")
  x: number;

  @type("number")
  y: number;

  @type("number")
  vx: number;

  @type("number")
  vy: number;

  @type("number")
  direction: number;

  constructor(x: number, y: number, vx: number, vy: number, direction: number) {
    super();
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.direction = direction;
  }
}


export class GameState extends Schema {
  @type({ map: Player }) 
  players = new MapSchema<Player>();

  @type([Laser])
  lasers = new ArraySchema<Laser>();
}
