// https://cole.codes/posts/framer-motion-useviewportscroll-element-scroll
import { useLayoutEffect, useState, useRef, MutableRefObject } from "react";

interface IuseRefScrollProgress<T> {
  ref: MutableRefObject<T>;
  start: number | null;
  end: number | null;
  offsetTop: number | null;
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

      if (offsetTop !== offsetTopNew) {
        setOffsetTop(offsetTopNew);
      }

      // Type 1
      // const startPosition = (offsetTop - windowH) / (bodyH - windowH);
      // const endPosition = (offsetTop - windowH + rect.height) / (bodyH - windowH);

      // Type 2
      const startPosition = offsetTopNew / bodyH;
      const endPosition = (offsetTopNew + rect.height) / (bodyH - windowH);

      setStart(startPosition);
      setEnd(endPosition);
    });
  }

  return { ref, start, end, offsetTop };
}
