import useScreenType from "@root/src/hooks/useScreenType";

import styled from "styled-components";

import ImageComparisonSlider from "@components/image-comparison-slider";

import ExactLogo from "@assets/images/branding/exact-logo.png";
import VtcamScreenshot from "@assets/images/projects/vtcam/vtcam-3.png";
import VtcamLogin from "@assets/images/projects/vtcam/welcome_screen.png";
import VtcamLoginDark from "@assets/images/projects/vtcam/welcome_screen_dark.png";

import ProjectDisplay from "@blocks/project-display-plain";

const VTCAM_SCREENSHOTS_DATA = [
  // {
  //   image: VtcamScreenshot2.src,
  //   style: { top: "4%", left: "67%", width: "20%" },
  // },
  {
    image: VtcamScreenshot.src,
    style: { top: "46%", left: "10%", width: "50%" },
  },
];

const StyledScreenshot = styled.img`
  position: absolute;
`;

const Vtcam: React.FC = (): JSX.Element => {
  const { isScreenSmallerThanTablet } = useScreenType();

  return (
    <ProjectDisplay
      logo={ExactLogo.src}
      title="Video Analytic Camera"
      background="#699CFF"
      color="#000"
      description="A high-resolution camera system taking sports Bootcamps experiences to the next level."
      projectPageUrl="/portfolio/vt-cam"
      height="120vh"
    >
      <ImageComparisonSlider
        imageA={{
          src: VtcamLogin.src,
        }}
        imageB={{
          src: VtcamLoginDark.src,
        }}
        position="absolute"
        top={isScreenSmallerThanTablet ? "50%" : "20%"}
        left={isScreenSmallerThanTablet ? "50%" : "68%"}
        width={isScreenSmallerThanTablet ? "40%" : "16%"}
        transform={isScreenSmallerThanTablet ? "translateX(-50%)" : ""}
        rounded="2xl"
        overflow="hidden"
        border="2px solid #000"
        boxShadow="0 0 1px 1px #ffffff6d, 0 0 4px 4px #000"
        background="#000"
      />

      {!isScreenSmallerThanTablet &&
        VTCAM_SCREENSHOTS_DATA.map((s, i) => {
          return (
            <StyledScreenshot key={i} src={s.image} style={s.style || {}} />
          );
        })}
    </ProjectDisplay>
  );
};

export default Vtcam;
