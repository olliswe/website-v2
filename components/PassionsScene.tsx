import React from "react";
import { Scene } from "react-scrollmagic";

const PassionsScene = () => (
  <Scene duration={1000} pin>
    <div className="flex justify-center items-center h-28">
      Passions: Bike, Climb, Run, Warhammer
    </div>
  </Scene>
);

export default PassionsScene;
