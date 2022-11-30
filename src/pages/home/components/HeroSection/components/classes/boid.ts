import { Point3D } from "./point";

const MAX_RADIUS = 4;

export class Boid {
  position: Point3D;
  velocity: Point3D = new Point3D();
  speed = 5;
  context: CanvasRenderingContext2D;
  show = false;
  radius = 0;
  friction = 0;
  relativeVelocity: Point3D = new Point3D();
  acceleration = 0;
  hideSpeed = 0.15;

  constructor(context: CanvasRenderingContext2D, position: Point3D) {
    this.context = context;
    this.position = position;
  }

  applyRadiusUpdate = () => {
    if (this.show) {
      this.radius += this.hideSpeed;
      this.radius = Math.min(this.radius, MAX_RADIUS);
    } else {
      this.radius -= this.hideSpeed;
      this.radius = Math.max(this.radius, 0);
      if (this.radius < 0.1) this.radius = 0;
    }
  };

  applyFriction = () => {
    if (!this.friction) return;

    if (Math.abs(this.velocity.x - this.friction) > this.friction) {
      if (this.velocity.x < this.friction) {
        this.velocity.x += this.friction;
      } else {
        this.velocity.x -= this.friction;
      }
    }

    if (Math.abs(this.velocity.y - this.friction) > this.friction) {
      if (this.velocity.y < this.friction) {
        this.velocity.y += this.friction;
      } else {
        this.velocity.y -= this.friction;
      }
    }

    if (Math.abs(this.velocity.z - this.friction) > this.friction) {
      if (this.velocity.z < this.friction) {
        this.velocity.z += this.friction;
      } else {
        this.velocity.z -= this.friction;
      }
    }
  };

  applyAcceleration = () => {
    if (!this.acceleration) return;

    if (this.velocity.x < 0) {
      this.velocity.x -= this.acceleration;
    } else {
      this.velocity.x += this.acceleration;
    }

    if (this.velocity.y < 0) {
      this.velocity.y -= this.acceleration;
    } else {
      this.velocity.y += this.acceleration;
    }

    if (this.velocity.z < this.acceleration) {
      this.velocity.z -= this.acceleration;
    } else {
      this.velocity.z += this.acceleration;
    }
  };

  update = (debug = false) => {
    this.applyRadiusUpdate();

    this.applyFriction();
    this.applyAcceleration();

    const prevPosition = this.position.clone();

    this.position = this.position.clone().add(this.velocity);
    this.relativeVelocity = this.position
      .clone()
      .subtract(prevPosition)
      .normalized();
  };

  draw = () => {
    this.context.beginPath();
    // this.context.fillStyle = "#00ff00";
    this.context.fillStyle = "#1201FF";
    this.context.arc(
      this.position.x,
      this.position.y,
      this.radius,
      0,
      2 * Math.PI
    );
    this.context.fill();
  };
}
