import React, { useEffect, useRef } from "react";

import styled from "styled-components";

import { Point3D } from "./classes";
import { init } from "./utils/main";

const StyledCanvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  /* z-index: -1; */
  /* cursor: pointer; */
  cursor: grab;
  /* border: 2px dashed red; */
`;

const CanvasDisplay: React.FC<{
  className?: string;
  width?: number;
  height?: number;
  globeConfig?: {
    radius?: number;
    rings?: number;
    slices?: number;
    globeRenderOffset?: Point3D;
    globeRenderOffsetPercentage?: Point3D;
  };
}> = ({
  className,
  width: widthFromProps,
  height: heightFromProps,
  globeConfig: globConfig,
}) => {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const width = widthFromProps || canvas.getBoundingClientRect().width;
    const height = heightFromProps || canvas.getBoundingClientRect().height;
    canvas.width = width;
    canvas.height = height;

    init(canvas, globConfig);
  }, [widthFromProps, heightFromProps, globConfig]);

  return (
    <StyledCanvas
      id="bg-interactive-display"
      ref={ref}
      width="500"
      height="500"
      className={className}
    />
  );
};

export default CanvasDisplay;
