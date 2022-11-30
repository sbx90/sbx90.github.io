import React, { memo } from "react";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

import { Box, ChakraProps, ThemingProps } from "@chakra-ui/react";

import { __DEV__ } from "@definitions/utils";

const ImageComparisonSlider: React.FC<
  {
    imageA: {
      src: string;
    };
    imageB: {
      src: string;
    };
  } & ChakraProps &
    ThemingProps
> = ({ imageA, imageB, ...rest }) => {
  return (
    <Box {...rest}>
      <ReactCompareSlider
        changePositionOnHover
        itemOne={<ReactCompareSliderImage src={imageA.src} alt="Image one" />}
        itemTwo={<ReactCompareSliderImage src={imageB.src} alt="Image two" />}
      />
    </Box>
  );
};

if (__DEV__) {
  ImageComparisonSlider.displayName = "ImageComparisonSlider";
}

export default memo(ImageComparisonSlider);
