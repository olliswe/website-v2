import { Scene } from "react-scrollmagic";
import React from "react";

const WorkScene = () => (
  <Scene duration={1000} pin>
    {(progress: number) => (
      <div className="flex flex-col justify-center items-center h-48">
        <div className="underline flex justify-center items-center">WORK</div>
        <div className="flex justify-center items-center text-4xl h-20">
          <span className="mr-9 ml-36">🧑🏾‍💻</span>@
          {progress > 0.1 ? (
            <img src="images/vc.gif" style={{ width: 200, marginLeft: 22 }} />
          ) : (
            <div style={{ width: 200, marginLeft: 22 }} />
          )}
        </div>
      </div>
    )}
  </Scene>
);

export default WorkScene;
