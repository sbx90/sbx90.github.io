import React from "react";

import styled from "styled-components";

import { Text } from "@chakra-ui/react";

import { getSlideAnitmationString } from "./utils";

const StyledItem = styled.div<{ $height?: string; $index?: number }>`
  height: ${({ $height }) => $height};
  ${({ $index }) =>
    $index === 0 ? `animation: slide 8s linear infinite` : ""};
`;

const StyledContainer = styled.div<{ $itemCount: number; $height: string }>`
  display: inline-block;
  height: ${({ $height }) => $height};
  text-align: right;
  overflow: hidden;

  ${({ $itemCount = 0, $height }) =>
    getSlideAnitmationString($itemCount, $height)}

  ${StyledItem}:nth-child(0) {
    animation: slide 5s linear infinite;
  }
`;

const TextScrollAnimator: React.FC<{
  className?: string;
  itemList?: unknown[];
  height?: string;
  style?: React.CSSProperties;
}> = ({ className, itemList = [], height = "38px", style }) => {
  if (!itemList.length) return null;

  return (
    <StyledContainer
      className={className}
      $itemCount={itemList.length}
      $height={height}
      style={style}
    >
      {itemList.map((item, i) => {
        return (
          <StyledItem key={i} $index={i} $height={height} style={{}}>
            <Text as="span">{item}</Text>
          </StyledItem>
        );
      })}
    </StyledContainer>
  );
};

export default TextScrollAnimator;
