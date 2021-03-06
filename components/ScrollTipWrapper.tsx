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
        pointerEvents: "none",
        zIndex: 1000,
        padding,
      }}
      className="flex flex-col items-center"
    >
      <ScrollTip />
      <div
        style={{
          fontSize: 10,
        }}
      >
        scroll
      </div>
    </div>
  );
};

export default ScrollTipWrapper;
