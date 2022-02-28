import { Scene } from "react-scrollmagic";
import React from "react";

const CountryScene = () => (
  <Scene duration={1000} pin>
    {(progress: number) => (
      <div className="flex flex-col justify-center items-center h-28">
        <div className="underline flex justify-center items-center">FROM</div>
        <div className="flex justify-center items-center text-4xl w-full">
          🇸🇪
          {progress > 0.25 && "+🇮🇳"}
          {progress > 0.5 && "+🇩🇪"}
          {progress > 0.75 && "+🇩🇰"}
        </div>
      </div>
    )}
  </Scene>
);

export default CountryScene;
