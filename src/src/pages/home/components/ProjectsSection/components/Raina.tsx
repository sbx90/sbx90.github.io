import Spline from "@splinetool/react-spline";

import styled from "styled-components";

import RainaLogo from "@assets/images/branding/raina-logo.png";
import RainaScreenshot1 from "@assets/images/projects/raina/raina-1.png";
import RainaScreenshot2 from "@assets/images/projects/raina/raina-2.png";
// import RainaScreenshot3 from "@assets/images/projects/raina/raina-3.png";
import RainaScreenshot4 from "@assets/images/projects/raina/raina-4.png";
import RainaScreenshot5 from "@assets/images/projects/raina/raina-5.png";

import ProjectDisplay from "@blocks/project-display-plain";

const RAINA_SCREENSHOTS_DATA = [
  // {
  //   image: RainaScreenshot3.src,
  //   style: { top: "9%", left: "57%", width: "38%" },
  // },
  {
    image: RainaScreenshot4.src,
    style: { top: "56%", left: "8%", width: "43%" },
  },
  {
    image: RainaScreenshot2.src,
    style: {
      top: "58%",
      left: "calc(48% + 3rem)",
      width: "218px",
      height: "396px",
      "object-fit": "contain",
    },
  },
  {
    image: RainaScreenshot1.src,
    style: {
      top: "58%",
      left: "calc(48% + 206px + 3rem)",
      width: "218px",
      height: "396px",
      "object-fit": "contain",
    },
  },
  {
    image: RainaScreenshot5.src,
    style: {
      top: "54%",
      left: "calc(40% + 3rem + 504px)",
      width: "310px",
      height: "470px",
      "object-fit": "contain",
    },
  },
];

const StyledScreenshot = styled.img`
  position: absolute;
`;

const StyledSpline = styled(Spline)`
  position: absolute;
  top: -142px;
  left: 28%;
  margin: 0;
`;

const Raina: React.FC = (): JSX.Element => {
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
      <StyledSpline scene="https://prod.spline.design/MOCsFZqxRraZnNGX/scene.splinecode" />

      {RAINA_SCREENSHOTS_DATA.map((s, i) => {
        return <StyledScreenshot key={i} src={s.image} style={s.style || {}} />;
      })}
    </ProjectDisplay>
  );
};

export default Raina;
