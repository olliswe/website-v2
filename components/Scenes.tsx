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
        {(progress: number) => (
          <div className="flex flex-col justify-center items-center h-28">
            <div className="underline flex justify-center items-center">
              WORK
            </div>
            <div className="flex justify-center items-center text-4xl">
              <span className="mr-9 ml-5">🧑🏾‍💻</span>@
              {progress > 0.1 ? (
                <img
                  src="images/docto.gif"
                  style={{ width: 70, marginLeft: 22 }}
                />
              ) : (
                <div style={{ width: 70, marginLeft: 22 }} />
              )}
            </div>
          </div>
        )}
      </Scene>
      <Scene duration={1000} pin>
        {(progress: number) => (
          <div className="flex flex-col justify-center items-center h-28">
            <div className="underline flex justify-center items-center">
              FROM
            </div>
            <div className="flex justify-center items-center text-4xl w-full">
              🇸🇪
              {progress > 0.25 && "+🇮🇳"}
              {progress > 0.5 && "+🇩🇪"}
              {progress > 0.75 && "+🇩🇰"}
            </div>
          </div>
        )}
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
