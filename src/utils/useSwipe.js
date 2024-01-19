import { useState } from "react";

export const useSwipe = (handlePrevClick, handleNextClick) => {
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const minSwipeDistance = 100;

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const resetTouch = () => {
    setTouchStart(0);
    setTouchEnd(0);
  };

  const handleTouchEnd = () => {
    if ((touchEnd !== 0) & (touchStart - touchEnd > minSwipeDistance)) {
      handleNextClick();
      resetTouch();
    } else if ((touchEnd !== 0) & (touchEnd - touchStart > minSwipeDistance)) {
      handlePrevClick();
      resetTouch();
    }
  };

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};
