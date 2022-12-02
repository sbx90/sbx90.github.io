import { useMediaQuery } from "@chakra-ui/react";

const useScreenType = () => {
  const [isLargerThan768] = useMediaQuery("(max-width: 768px)");

  return {
    isScreenSmallerThanTablet: isLargerThan768,
  };
};

export default useScreenType;
