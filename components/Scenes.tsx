import React, { useState } from "react";
import { Controller } from "react-scrollmagic";
import TitleScene from "./TitleScene";
import useFontFaceObserver from "use-font-face-observer";
import WorkScene from "./WorkScene";
import CountryScene from "./CountryScene";
import EducationScene from "./EducationScene";
import ScrollTip from "./ScrollTip";

const Scenes = () => {
  const isFontListLoaded = useFontFaceObserver([{ family: `oi-regular` }]);
  // const [showTooltip, setShowToolTip] = useState(true);

  if (!isFontListLoaded) {
    return <div />;
  }

  return (
    <Controller>
      <TitleScene />
      <WorkScene />
      <CountryScene />
      <EducationScene />
      {/*<div className="fixed bottom-5 w-full">*/}
      {/*    <ScrollTip />*/}
      {/*</div>*/}
    </Controller>
  );
};

export default Scenes;