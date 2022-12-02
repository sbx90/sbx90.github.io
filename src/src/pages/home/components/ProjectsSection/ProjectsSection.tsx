import { Box } from "@chakra-ui/react";

import AppScreenShot from "@assets/images/demo/app/app-demo.png";

import ProjectDisplay from "@blocks/project-display";

import Raina from "./components/Raina";
import Vtcam from "./components/Vtcam";

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
