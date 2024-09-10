"use client";
import Lottie from "lottie-react";
import faqAnimationData from "../../../../../src/animationData/faqAnimation.json";

const FaqAnimation = () => {
  return (
    <>
      <Lottie animationData={faqAnimationData} loop={true} />
    </>
  );
};

export default FaqAnimation;
