import Spline from "@splinetool/react-spline";

import { Box } from "@chakra-ui/react";

import RainaLogo from "@assets/images/branding/raina-logo.png";
import AppScreenShot from "@assets/images/demo/app/app-demo.png";
import RainaScreenshot1 from "@assets/images/projects/raina/raina-1.png";
import RainaScreenshot2 from "@assets/images/projects/raina/raina-2.png";
import RainaScreenshot3 from "@assets/images/projects/raina/raina-3.png";
import RainaScreenshot4 from "@assets/images/projects/raina/raina-4.png";
import RainaScreenshot5 from "@assets/images/projects/raina/raina-5.png";

import ProjectDisplay from "@blocks/project-display";

import Raina from "./components/Raina";
import Vtcam from "./components/Vtcam";

const RAINA_SCREENSHOTS_DATA = [
  {
    image: RainaScreenshot3.src,
    style: { top: "9%", left: "57%", width: "38%" },
  },
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

const SCREENSHOTS_DATA = [
  {
    image: AppScreenShot.src,
    style: { top: "8%", right: "10%", height: "420px" },
  },
  {
    image: AppScreenShot.src,
    style: { top: "calc(8% + 2rem)", right: "20%", height: "420px" },
  },
  {
    image: AppScreenShot.src,
    style: {
      top: "60%",
      height: "420px",
    },
  },
  {
    image: AppScreenShot.src,
    style: {
      top: "60%",
      left: "calc((320px + 2rem))",
      height: "420px",
    },
  },
  {
    image: AppScreenShot.src,
    style: {
      top: "60%",
      left: "calc((320px + 2rem) * 2)",
      height: "420px",
    },
  },
  {
    image: AppScreenShot.src,
    style: {
      top: "60%",
      left: "calc((320px + 2rem) * 3)",
      height: "420px",
    },
  },
];

const ProjectsSection: React.FC = (): JSX.Element => {
  return (
    <Box>
      <Raina />

      <ProjectDisplay
        logo={RainaLogo.src}
        background="#B8CBEF"
        color="#000"
        title="Music Streaming Platform"
        description="An in-store music streaming system for commercial and high-end venues with custom live DJ mixes."
        screenshots={RAINA_SCREENSHOTS_DATA}
        projectPageUrl="/portfolio/raina"
        height="160vh"
      />

      <Vtcam />

      {false && (
        <ProjectDisplay
          logo=""
          title="Inventory management made simple."
          color="#fff"
          background="#212121"
          description="Live in-door inventory tracking system for asset management, designed and manufactured by GBX Technology & SBX."
          screenshots={SCREENSHOTS_DATA}
          projectPageUrl="/portfolio/tag"
        />
      )}
    </Box>
  );
};

export default ProjectsSection;
