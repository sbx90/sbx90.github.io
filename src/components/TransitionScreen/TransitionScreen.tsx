import React from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  text-align: center;

  .loader {
    position: absolute;
    z-index: 999;
    top: 0;
    left: 0;
    width: 0;
    height: 100vh;
    transition: width 0s 1.4s ease;
  }
  .loader .loader__icon {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    opacity: 0;
    transition: opacity 0.5s ease;
  }

  .loader .loader__icon svg {
    transform-origin: 0 0;
  }

  .loader .loader__tile {
    position: absolute;
    left: 0;
    width: 0;
    height: 20%;
    background-color: #1201FF;
    transition: width 0.7s ease 1s;
  }
  .loader .loader__tile:nth-child(0) {
    top: calc(-1 * 20%);
    transition-delay: -0.2s;
  }
  .loader .loader__tile:nth-child(1) {
    top: calc(0 * 20%);
    transition-delay: 0s;
  }
  .loader .loader__tile:nth-child(2) {
    top: calc(1 * 20%);
    transition-delay: 0.2s;
  }
  .loader .loader__tile:nth-child(3) {
    top: calc(2 * 20%);
    transition-delay: 0.4s;
  }
  .loader .loader__tile:nth-child(4) {
    top: calc(3 * 20%);
    transition-delay: 0.6s;
  }
  .loader .loader__tile:nth-child(5) {
    top: calc(4 * 20%);
    transition-delay: 0.8s;
  }
  .loader--active {
    width: 100%;
    transition-delay: 0s;
  }
  .loader--active .loader__icon {
    opacity: 1;
    transition: opacity 0.5s 1.4s ease;
  }
  .loader--active .loader__tile {
    width: 100%;
  }
  .loader--active .loader__tile:nth-child(0) {
    transition-delay: -0.2s;
  }
  .loader--active .loader__tile:nth-child(1) {
    transition-delay: 0s;
  }
  .loader--active .loader__tile:nth-child(2) {
    transition-delay: 0.2s;
  }
  .loader--active .loader__tile:nth-child(3) {
    transition-delay: 0.4s;
  }
  .loader--active .loader__tile:nth-child(4) {
    transition-delay: 0.6s;
  }
  .loader--active .loader__tile:nth-child(5) {
    transition-delay: 0.8s;
  }
`;

const TransitionScreen: React.FC<{
  children?: React.ReactNode;
  hidden?: boolean;
}> = ({ children, hidden }) => {
  return (
    <StyledContainer>
      <div className={`loader${hidden ? ` loader--active` : ""}`}>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
        <div className="loader__tile"></div>
      </div>
      {children}
    </StyledContainer>
  );
};

export default TransitionScreen;
