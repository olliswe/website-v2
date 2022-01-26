import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import TitleScene from "./TitleScene";
import useFontFaceObserver from "use-font-face-observer";

const Scenes = () => {
  const isFontListLoaded = useFontFaceObserver([{ family: `oi-regular` }]);

  if (!isFontListLoaded) {
    return <div />;
  }

  return (
    <Controller>
      <TitleScene />
      <Scene duration={1000} pin>
        <div className="flex flex-col justify-center items-center h-28">
          <div className="underline flex justify-center items-center">WORK</div>
          <div className="flex justify-center items-center text-4xl">
            🧑🏾‍💻 @{" "}
          </div>
        </div>
      </Scene>
      <Scene duration={1000} pin>
        <div className="flex flex-col justify-center items-center h-28">
          <div className="underline flex justify-center items-center">FROM</div>
          <div className="flex justify-center items-center text-4xl">
            🇸🇪 🇮🇳 🇩🇪 🇩🇰
          </div>
        </div>
      </Scene>
      <Scene duration={1000} pin>
        <div className="flex justify-center items-center h-28">
          Education: Cam Engineering + Internet
        </div>
      </Scene>
      <Scene duration={1000} pin>
        <div className="flex justify-center items-center h-28">
          Passions: Bike, Climb, Run, Warhammer
        </div>
      </Scene>
    </Controller>
  );
};

export default Scenes;
