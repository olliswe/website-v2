import React from "react";
import { Scene } from "react-scrollmagic";

const PassionsScene = () => (
  <Scene duration={1000} pin>
    <div className="flex justify-center items-center h-28">
      <div className="underline flex justify-center items-center">PASSIONS</div>
      <div className="flex relative"></div>
    </div>
  </Scene>
);

export default PassionsScene;
