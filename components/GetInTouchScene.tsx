import React from "react";
import { Scene } from "react-scrollmagic";

const GetInTouchScene = () => (
  <Scene duration={1000} pin>
    {(progress: number) => (
      <div className="flex flex-col justify-center items-center h-28">
        <div className="underline flex justify-center items-center mb-3">
          GET IN TOUCH 🤝
        </div>
        <div className="flex justify-center items-center text-4xl w-full">
          <img src="/images/LinkedIn.png" style={{ width: 80 }} />
        </div>
      </div>
    )}
  </Scene>
);

export default GetInTouchScene;
