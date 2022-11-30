import lodashGet from "lodash/get";
import lodashSet from "lodash/set";

import { M_PI_2 } from "../constant";
import { projection, rotateX, rotateY, rotateZ } from "../utils";
import { Point3D } from "./point";

const GLOBE_MAX_WIDTH = 2;

export class Globe {
  vertices: Point3D[] = [];
  vertices2D: Point3D[] = [];

  radius = 20.0;
  rings = 16;
  slices = 32;
  numberOfVertices = 0;
  context: CanvasRenderingContext2D;
  position = new Point3D();
  rotation = new Point3D();
  width: number;
  height: number;
  lastX = -1;
  lastY = -1;
  distance = 900;
  show = true;
  lineWidth = GLOBE_MAX_WIDTH;

  constructor(
    context: CanvasRenderingContext2D,
    position: Point3D,
    width: number,
    height: number,
    radius = 20.0,
    rings = 16,
    slices = 32,
  ) {
    this.context = context;
    this.position = position;
    this.radius = radius;
    this.rings = rings;
    this.slices = slices;
    this.width = width;
    this.height = height;
    this.calculateVertices();
  }

  calculateVertices = () => {
    const dTheta = (Math.PI * 2) / this.slices;
    const dPhi = Math.PI / this.rings;

    for (let lat = 0; lat < this.rings + 1; ++lat) {
      const phi = M_PI_2 - lat * dPhi;
      const cosPhi = Math.cos(phi);
      const sinPhi = Math.sin(phi);

      // Iterate over longitudes (slices)
      for (let lon = 0; lon < this.slices + 1; ++lon) {
        this.vertices2D[this.numberOfVertices] = new Point3D();

        const theta = lon * dTheta;
        const cosTheta = Math.cos(theta);
        const sinTheta = Math.sin(theta);
        const p = (this.vertices[this.numberOfVertices] = new Point3D());

        p.x = this.radius * cosTheta * cosPhi;
        p.y = this.radius * sinPhi;
        p.z = this.radius * sinTheta * cosPhi;
        this.numberOfVertices++;
      }
    }
  };

  setPosition = (position: Point3D) => {
    if (!this.position.isEqual(position)) {
      this.position = position;
    }
  };

  strokeSegment = (index: number, color?: string) => {
    const p = this.vertices2D[index];

    if (!p) return;

    const x = p.x;
    const y = p.y;

    if (this.lastX == -1 && this.lastY == -1) {
      this.lastX = x;
      this.lastY = y;
      return;
    }

    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      if (p.z < 0) {
        this.context.strokeStyle = color || "#1201ff63";
      } else {
        this.context.strokeStyle = color || "#1201FF";
        // this.context.strokeStyle = color || "#1201ff63";
      }
      this.context.beginPath();
      this.context.moveTo(this.lastX, this.lastY);
      this.context.lineTo(x, y);
      this.context.stroke();
      this.context.closePath();
      this.lastX = x;
      this.lastY = y;
    }
  };

  drawLines = () => {
    for (let i = 0; i < this.numberOfVertices; i++) {
      this.strokeSegment(i);
    }

    let color;

    for (let i = 0; i < this.slices + 1; i++) {
      for (let j = 0; j < this.rings + 1; j++) {
        if (j <= 5) {
          //   color = "red";
        }
        this.strokeSegment(i + j * (this.slices + 1), color);
      }
    }
  };

  drawVertices = () => {
    this.vertices2D.forEach((p) => {
      if (p.z < 0) {
        // this.context.strokeStyle = "#ff000063";
        this.context.strokeStyle = "#ff0000";
      } else {
        // this.context.strokeStyle = "#ff000063";
        this.context.strokeStyle = "#ff0000";
      }

      this.context.beginPath();
      this.context.arc(p.x, p.y, 6, 0, 2 * Math.PI);
      this.context.stroke();
    });
  };

  applyRotation = () => {
    this.vertices.forEach((p) => {
      rotateX(p, this.rotation.x);
      rotateY(p, this.rotation.y);
      rotateZ(p, this.rotation.z);
    });
  };

  applyOpacityUpdate = () => {
    if (this.show) {
      this.lineWidth += 0.1;
      this.lineWidth = Math.min(this.lineWidth, GLOBE_MAX_WIDTH);
    } else {
      this.lineWidth -= 0.1;
      this.lineWidth = Math.max(this.lineWidth, 0);
      if (this.lineWidth < 0.1) this.lineWidth = 0;
    }
  };

  applyRotationFriction = () => {
    const FRICTION_FACTOR = 0.5;
    const STOP_FACTOR = 5;

    ["x", "y", "z"].forEach((key: string) => {
      const val = lodashGet(this.rotation, key, 0);
      let newVal = val;

      if (!val) {
        return;
      }

      let friction = newVal * FRICTION_FACTOR;
      if (Math.abs(friction) < STOP_FACTOR * 2) {
        friction *= 0.2;
      }

      if (val > STOP_FACTOR) {
        newVal -= friction;
      } else if (val < -STOP_FACTOR) {
        newVal -= friction;
      } else {
        newVal = 0;
      }

      lodashSet(this.rotation, key, newVal);
    });
  };

  update = () => {
    // this.rotation.y = Math.PI / 10000;

    this.applyOpacityUpdate();
    this.applyRotationFriction();
    this.applyRotation();

    this.vertices.forEach((p, i) => {
      this.vertices2D[i].x = projection(
        p.x,
        p.z,
        this.position.x,
        100.0,
        this.distance,
      );
      this.vertices2D[i].y = projection(
        p.y,
        p.z,
        this.position.y,
        100.0,
        this.distance,
      );
      this.vertices2D[i].z = p.z;
    });
  };

  draw = () => {
    // this.drawVertices();

    if (this.lineWidth < 0.1) {
      this.context.lineWidth = 1;
      return;
    }

    this.context.lineWidth = this.lineWidth;
    this.drawLines();
    this.context.lineWidth = 1;
  };
}
