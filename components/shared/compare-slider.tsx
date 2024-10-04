"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function CompareSlider() {
  return (
    <ReactCompareSlider
      itemOne={<ReactCompareSliderImage src="/images/old.jpg" />}
      itemTwo={<ReactCompareSliderImage src="/images/modern.jpg" />}
    />
  );
}

export default CompareSlider;
