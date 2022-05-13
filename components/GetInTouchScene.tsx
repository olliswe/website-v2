import React, { useEffect } from "react";
import { Scene } from "react-scrollmagic";
import Elevator from "../utils/elevator";

const HideScrolltip = ({ setScrolltipState }: any) => {
  useEffect(() => {
    setScrolltipState((prev: any) => ({ ...prev, hideContainer: true }));
    return () =>
      setScrolltipState((prev: any) => ({ ...prev, hideContainer: false }));
  }, [setScrolltipState]);
  return <></>;
};

const GetInTouchScene = ({ setScrolltipState }: { setScrolltipState: any }) => {
  const handleClick = () => {
    const elevator = new Elevator({
      duration: 5000,
      mainAudio: "/music/demo_music_elevator.mp3",
      endAudio: "/music/demo_music_ding.mp3",
    });
    elevator.elevate();
  };

  return (
    <Scene duration={1000} pin>
      {(progress: number) => (
        <div className="flex flex-col justify-center items-center h-28">
          <div className="underline flex justify-center items-center mb-3">
            GET IN TOUCH 🤝
          </div>
          <div className="flex justify-center items-center text-4xl w-full">
            <img src="/images/LinkedIn.png" style={{ width: 80 }} />
          </div>
          {progress > 0.1 && <HideScrolltip {...{ setScrolltipState }} />}
          <a href="#" onClick={handleClick}>
            BACK TO TOP
          </a>
        </div>
      )}
    </Scene>
  );
};

export default GetInTouchScene;
