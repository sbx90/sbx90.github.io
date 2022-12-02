import React, { memo } from "react";

import styled from "styled-components";

import { __DEV__ } from "@definitions/utils";

const StyledHamburgerIcon = styled.div<{
  $color: string;
  $active: boolean;
  $size?: string;
}>`
  --bar-height: 3px;
  position: relative;

  height: var(--bar-height);
  min-height: var(--bar-height);
  background-color: ${({ $color }) => $color};

  &,
  &:before,
  &:after {
    border-radius: 100rem;
    will-change: transform, opacity;
    transition: transform 240ms ease-in-out, opacity 240ms ease-in-out;
  }

  &:before,
  &:after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 100%;
    height: var(--bar-height);
    min-height: var(--bar-height);
    background-color: ${({ $color }) => $color};
  }

  &:before {
    transform: translate(-50%, calc(-4 * var(--bar-height)));
  }

  &:after {
    transform: translate(-50%, calc(3 * var(--bar-height)));
  }

  ${({ $active }) =>
    $active
      ? `
        transform: rotate(-45deg);

        &:before {
            transform: translate(-50%,-50%) rotate(-90deg);
        }

        &:after {
            opacity: 0;
        }
      `
      : ""}
`;

const HamburgerIcon: React.FC<{
  color?: string;
  size?: string;
  active?: boolean;
}> = ({ color = "#000", size = "36px", active = false }) => {
  return <StyledHamburgerIcon $color={color} $size={size} $active={active} />;
};

if (__DEV__) {
  HamburgerIcon.displayName = "HamburgerIcon";
}

export default memo(HamburgerIcon);
