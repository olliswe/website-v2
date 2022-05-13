import React from "react";
import { Controller } from "react-scrollmagic";
import TitleScene from "./TitleScene";
import useFontFaceObserver from "use-font-face-observer";
import WorkScene from "./WorkScene";
import CountryScene from "./CountryScene";
import EducationScene from "./EducationScene";
import PassionsScene from "./PassionsScene";
import GetInTouchScene from "./GetInTouchScene";

const Scenes = ({ setScrolltipState }: { setScrolltipState: any }) => {
  const isFontListLoaded = useFontFaceObserver([{ family: `oi-regular` }]);

  if (!isFontListLoaded) {
    return <div />;
  }

  return (
    <Controller>
      <TitleScene setScrolltipState={setScrolltipState} />
      <WorkScene />
      <CountryScene />
      <EducationScene />
      <PassionsScene />
      <GetInTouchScene setScrolltipState={setScrolltipState} />
    </Controller>
  );
};

export default Scenes;
