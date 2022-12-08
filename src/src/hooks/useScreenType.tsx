import { useEffect, useState } from "react";

import { useMediaQuery } from "@chakra-ui/react";

const useScreenType = () => {
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)");
  const [isScreenSmallerThanTablet, setIsScreenSmallerThanTablet] =
    useState(false);

  useEffect(() => {
    if (isScreenSmallerThanTablet !== isLargerThan768) {
      setIsScreenSmallerThanTablet(!isScreenSmallerThanTablet);
    }
  }, [isScreenSmallerThanTablet, isLargerThan768]);

  return {
    isScreenSmallerThanTablet,
  };
};

export default useScreenType;
