export class Point3D {
  x = 0;
  y = 0;
  z = 0;

  constructor(x: number = 0, y: number = 0, z: number = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  normalized = () => {
    const m = this.x * this.x + this.y * this.y + this.z * this.z || 1;
    return new Point3D(this.x / m, this.y / m, this.z / m);
  };

  add = (v: Point3D) => {
    this.x += v.x;
    this.y += v.y;
    this.z += v.z;

    return this;
  };

  addSingleValue = (v: number = 1) => {
    this.x += v;
    this.y += v;
    this.z += v;

    return this;
  };

  multiply = (v: number) => {
    this.x *= v;
    this.y *= v;
    this.z *= v;

    return this;
  };

  subtract = (v: Point3D) => {
    this.x -= v.x;
    this.y -= v.y;
    this.z -= v.z;

    return this;
  };

  subtractSingleValue = (v: number = 1) => {
    this.x -= v;
    this.y -= v;
    this.z -= v;

    return this;
  };

  divideSingleValue = (v: number = 1) => {
    this.x /= v;
    this.y /= v;
    this.z /= v;

    return this;
  };

  clone = () => {
    return new Point3D(this.x, this.y, this.z);
  };

  copyFrom = (v: Point3D) => {
    this.x = v.x;
    this.y = v.y;
    this.z = v.z;

    return this;
  };

  distanceFrom = (v: Point3D) => {
    return Math.sqrt(
      Math.abs(v.x - this.x) + Math.abs(v.y - this.y) + Math.abs(v.z - this.z),
    );
  };

  isEqual = (v: Point3D) => {
    return this.x === v.x && this.y === v.y && this.z === v.z;
  };
}
