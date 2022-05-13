import React, { useState } from "react";
import { Controller } from "react-scrollmagic";
import TitleScene from "./TitleScene";
import useFontFaceObserver from "use-font-face-observer";
import WorkScene from "./WorkScene";
import CountryScene from "./CountryScene";
import EducationScene from "./EducationScene";
import ScrollTip from "./ScrollTip";
import PassionsScene from "./PassionsScene";
import GetInTouchScene from "./GetInTouchScene";

const Scenes = () => {
  const isFontListLoaded = useFontFaceObserver([{ family: `oi-regular` }]);

  if (!isFontListLoaded) {
    return <div />;
  }

  return (
    <Controller>
      <TitleScene />
      <WorkScene />
      <CountryScene />
      <EducationScene />
      <PassionsScene />
      <GetInTouchScene />
    </Controller>
  );
};

export default Scenes;
