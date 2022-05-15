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
          <div className="flex justify-center items-center text-4xl w-full mt-5">
            <a
              className="flex justify-center items-center mr-5"
              href="https://www.linkedin.com/in/oliver-iyer/"
              target="_blank"
            >
              <img src="/images/LinkedIn.png" style={{ height: 21 }} />
            </a>
            <a
              className="flex justify-center items-center"
              href="https://github.com/olliswe"
              target="_blank"
            >
              <img src="/images/github2.png" style={{ height: 30 }} />
            </a>
          </div>
          {progress > 0.1 && <HideScrolltip {...{ setScrolltipState }} />}
          <a href="#" onClick={handleClick} className="mt-20">
            back to top
          </a>
        </div>
      )}
    </Scene>
  );
};

export default GetInTouchScene;
