// https://cole.codes/posts/framer-motion-useviewportscroll-element-scroll
import { useLayoutEffect, useState, useRef, MutableRefObject } from "react";

interface IuseRefScrollProgress<T> {
  ref: MutableRefObject<T>;
  start: number | null;
  end: number | null;
  offsetTop: number | null;
}

function round(value: number) {
  return Math.round((value + Number.EPSILON) * 100000) / 100000;
}

export function useRefScrollProgress<T extends HTMLElement | null>(
  inputRef: MutableRefObject<T>,
  offset = 100,
): IuseRefScrollProgress<T> {
  const ref = inputRef || useRef<T | null>(null);
  const [start, setStart] = useState<number | null>(null);
  const [end, setEnd] = useState<number | null>(null);
  const [offsetTop, setOffsetTop] = useState<number | null>(null);
  // only client
  if (typeof window !== "undefined") {
    useLayoutEffect(() => {
      if (!ref.current) {
        return;
      }
      const windowH = window.innerHeight;
      const bodyH = document.body.clientHeight;
      const rect = ref.current.getBoundingClientRect();
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const offsetTopNew = rect.top + scrollTop - windowH + offset;

      if (round(offsetTop) !== round(offsetTopNew)) {
        setOffsetTop(offsetTopNew);
      }

      // Type 1
      // const startPosition = (offsetTop - windowH) / (bodyH - windowH);
      // const endPosition = (offsetTop - windowH + rect.height) / (bodyH - windowH);

      // Type 2
      const startPositionNew = offsetTopNew / bodyH;
      const endPositionNew = (offsetTopNew + rect.height) / (bodyH - windowH);

      if (round(start) !== round(startPositionNew)) {
        setStart(startPositionNew);
      }
      if (round(end) !== round(endPositionNew)) {
        setEnd(endPositionNew);
      }
    });
  }

  return { ref, start, end, offsetTop };
}
