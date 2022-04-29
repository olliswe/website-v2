import React from "react";
import { Scene } from "react-scrollmagic";

const PROGRESS_CUTS = 0.7 / 7;

const EducationScene = () => (
  <Scene duration={5000} pin>
    {(progress: number) => (
      <div style={{ position: "relative" }}>
        <div className="flex flex-col justify-center items-center h-28">
          {progress < 0.5 ? (
            <div className="underline flex justify-center items-center">
              EDUCATION
            </div>
          ) : (
            <img
              src="images/camlogo.png"
              style={{
                width: 150,
                opacity: progress > PROGRESS_CUTS * 5 + 0.1 + 0.1 ? 1 : 0,
                transition: "opacity 2s ease-in-out",
              }}
            />
          )}
        </div>
        {Array(6)
          .fill(0)
          .map((_, index) => (
            <img
              src={`images/graduation/grad${index + 1}.jpg`}
              width="400px"
              height="auto"
              key={index}
              style={{
                opacity:
                  progress < 0.1 || progress > PROGRESS_CUTS * 6 + 0.1 ? 0 : 1,
                transition: "opacity 1s ease-in-out",
                position: "absolute",
                left: "50%",
                transform: "translate(-50%, -350px) ",
                top: 0,
                visibility:
                  index === 5 && progress > PROGRESS_CUTS * index + 0.1
                    ? undefined
                    : progress < PROGRESS_CUTS * (index + 1) + 0.1 &&
                      progress > PROGRESS_CUTS * index + 0.1
                    ? undefined
                    : "hidden",
              }}
            />
          ))}
      </div>
    )}
  </Scene>
);

export default EducationScene;
