import ScrollTip from "./ScrollTip";
import React from "react";

const ScrollTipWrapper = ({ scrolltipState, padding }: any) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        top: "55%",
        opacity: scrolltipState.hideContainer ? 0 : 0.5,
        animation: "bounce 0.8s infinite alternate",
        padding,
      }}
      className="flex flex-col items-center"
    >
      <ScrollTip />
      <div
        style={{
          opacity: scrolltipState.hideText ? 0 : 1,
          transition: "opacity ease-out 1s",
          fontSize: 10,
        }}
      >
        scroll
      </div>
    </div>
  );
};

export default ScrollTipWrapper;
