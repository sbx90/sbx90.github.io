export function getSlideAnitmationString(
  itemCount: number,
  height: string,
): string {
  // eslint-disable-next-line prefer-spread
  let output = Array.apply(null, Array(itemCount))
    .map((_, i) => i)
    .concat(itemCount)
    .reverse()
    .map((n, i) => {
      const p1 = ((i - 1) * 100) / (itemCount || 1) + 3;
      const p1Rounded = Math.round(p1 * 100) / 100;

      const p2 = (i * 100) / (itemCount || 1);
      const p2Rounded = Math.round(p2 * 100) / 100;

      const marginTop = `calc(-1 * ${n} * ${height})`;

      const s: string =
        i === 0
          ? `
                0% {
                    margin-top: ${marginTop};
                }
            `
          : `
                ${p1Rounded}% {
                    margin-top: ${marginTop};
                }

                ${p2Rounded}% {
                    margin-top:  ${marginTop};
                }
            `;

      return s;
    })
    .join("");

  output = `
    @keyframes slide {
        ${output}
    }
  `;

  return output;
}
