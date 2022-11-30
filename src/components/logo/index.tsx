import { memo } from "react";

import { Box } from "@chakra-ui/react";

import imgLogo from "@assets/images/logo.png";

const Logo: React.FC = (): JSX.Element => {
  return (
    <Box width={"240px"} marginLeft="-12%">
      <img src={imgLogo.src} alt="" style={{ objectFit: "contain" }} />
    </Box>
  );
};

export default memo(Logo);
