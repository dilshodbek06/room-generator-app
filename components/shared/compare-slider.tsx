"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";

function CompareSlider() {
  return (
    <ReactCompareSlider
      className="rounded-sm"
      itemOne={
        <ReactCompareSliderImage
          style={{ width: "440px", height: "460px" }}
          src="/images/old.jpg"
          alt="old"
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          style={{ width: "440px", height: "460px" }}
          src="/images/modern.jpg"
          alt="new"
        />
      }
    />
  );
}

export default CompareSlider;
