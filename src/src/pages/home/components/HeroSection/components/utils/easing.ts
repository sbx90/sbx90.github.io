export function easeInOutQuint(t: any, b: any, c: any, d: any) {
  if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t * t + b;
  return (c / 2) * ((t -= 2) * t * t * t * t + 2) + b;
}

export function easeLinear(t: any, b: any, c: any, d: any) {
  return (c * t) / d + b;
}
