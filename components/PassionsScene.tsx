import React from "react";
import { Scene } from "react-scrollmagic";

const PassionsScene = () => (
  <Scene duration={1000} pin>
    {(progress: number) => (
      <div className="flex flex-col justify-center items-center h-28">
        <div className="underline flex justify-center items-center mb-3">
          PASSIONS
        </div>
        <div className="flex justify-center items-center text-4xl w-full">
          🚴🏽‍♂️
          {progress > 0.25 && "+🧗🏻‍♂️"}
          {progress > 0.5 && (
            <>
              <span>+</span>
              <img src="/images/40k.png" style={{ width: "80px" }} />
            </>
          )}
          {progress > 0.75 && "+🕺🏻"}
        </div>
      </div>
    )}
  </Scene>
);

export default PassionsScene;
