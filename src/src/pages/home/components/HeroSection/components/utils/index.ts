import { Point3D } from "../classes";

export function rotateX(point: Point3D, radians: number) {
  const y = point.y;
  point.y = y * Math.cos(radians) + point.z * Math.sin(radians) * -1.0;
  point.z = y * Math.sin(radians) + point.z * Math.cos(radians);
}

export function rotateY(point: Point3D, radians: number) {
  const x = point.x;
  point.x = x * Math.cos(radians) + point.z * Math.sin(radians) * -1.0;
  point.z = x * Math.sin(radians) + point.z * Math.cos(radians);
}

export function rotateZ(point: Point3D, radians: number) {
  const x = point.x;
  point.x = x * Math.cos(radians) + point.y * Math.sin(radians) * -1.0;
  point.y = x * Math.sin(radians) + point.y * Math.cos(radians);
}

export function projection(
  xy: number,
  z: number,
  xyOffset: number,
  zOffset: number,
  distance: number
) {
  return (distance * xy) / (z - zOffset) + xyOffset;
}
