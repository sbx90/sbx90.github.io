import useScreenType from "@root/src/hooks/useScreenType";
import Spline from "@splinetool/react-spline";

import styled from "styled-components";

import RainaLogo from "@assets/images/branding/raina-logo.png";
// import RainaScreenshot1 from "@assets/images/projects/raina/raina-1.png";
import RainaScreenshot2 from "@assets/images/projects/raina/raina-2.png";
// import RainaScreenshot3 from "@assets/images/projects/raina/raina-3.png";
// import RainaScreenshot4 from "@assets/images/projects/raina/raina-4.png";
import RainaScreenshot5 from "@assets/images/projects/raina/raina-5.png";

import ProjectDisplay from "@blocks/project-display-plain";

const RAINA_SCREENSHOTS_DATA = [
  // {
  //   image: RainaScreenshot3.src,
  //   style: { top: "9%", left: "57%", width: "38%" },
  // },
  // {
  //   image: RainaScreenshot4.src,
  //   style: { top: "56%", left: "8%", width: "43%" },
  // },
  {
    image: RainaScreenshot5.src,
    style: {
      bottom: "20%",
      left: "17%",
      width: "263px",
      height: "440px",
      "object-fit": "contain",
    },
  },
  {
    image: RainaScreenshot2.src,
    style: {
      bottom: "20%",
      left: "calc(29% + 3rem)",
      width: "306px",
      height: "470px",
      "object-fit": "contain",
    },
  },
  // {
  //   image: RainaScreenshot1.src,
  //   style: {
  //     top: "58%",
  //     left: "calc(48% + 206px + 3rem)",
  //     width: "218px",
  //     height: "396px",
  //     "object-fit": "contain",
  //   },
  // },
];

const StyledScreenshot = styled.img`
  position: absolute;
`;

const StyledSpline = styled(Spline)<{ isScreenSmallerThanTablet: boolean }>`
  position: absolute;
  top: ${({ isScreenSmallerThanTablet }) =>
    isScreenSmallerThanTablet ? "25%" : "-142px"};
  left: ${({ isScreenSmallerThanTablet }) =>
    isScreenSmallerThanTablet ? "-86%" : "28%"};
  margin: 0;
`;
// top: 152px;
// left: -86%;
const Raina: React.FC = (): JSX.Element => {
  const { isScreenSmallerThanTablet } = useScreenType();

  return (
    <ProjectDisplay
      logo={RainaLogo.src}
      background="#0E1129"
      color="#fff"
      title="Music Streaming Platform"
      description="An in-store music streaming system for commercial and high-end venues with custom live DJ mixes."
      projectPageUrl="/portfolio/raina"
      height="160vh"
    >
      <StyledSpline
        isScreenSmallerThanTablet={isScreenSmallerThanTablet}
        scene="https://prod.spline.design/MOCsFZqxRraZnNGX/scene.splinecode"
      />

      {!isScreenSmallerThanTablet &&
        RAINA_SCREENSHOTS_DATA.map((s, i) => {
          return (
            <StyledScreenshot key={i} src={s.image} style={s.style || {}} />
          );
        })}
    </ProjectDisplay>
  );
};

export default Raina;
