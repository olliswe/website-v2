import { Scene } from "react-scrollmagic";
import { SplitColorChannelText } from "react-text-fun";
import React, { useRef, useState } from "react";
import ScrollTip from "./ScrollTip";

const TitleScene = () => {
  const initialProgress = useRef<number>();
  const [loaded, setLoaded] = useState(false);

  return (
    <Scene duration={1000} pin>
      {(progress: number) => {
        if (!initialProgress.current && progress > 0) {
          initialProgress.current = progress;
        }
        return (
          <div className="flex relative justify-center items-center">
            {loaded && (
              <>
                {initialProgress.current &&
                progress > initialProgress.current ? (
                  // TODO: HIDE INSTEAD OF NOT RENDERING
                  <SplitColorChannelText
                    text="OLIVER IYER"
                    fontSize={40}
                    addBlur={true}
                    addNoise={true}
                    fontFamily={"oi-regular"}
                    rgbOffset={0.07 + progress - initialProgress.current}
                    rotation={-45}
                  />
                ) : (
                  // TODO: HIDE INSTEAD OF NOT RENDERING
                  <SplitColorChannelText
                    text="OLIVER IYER"
                    fontSize={40}
                    addBlur={true}
                    addNoise={true}
                    fontFamily={"oi-regular"}
                    rgbOffset={0}
                    rotation={0}
                  />
                )}
                <div
                  style={{
                    position: "fixed",
                    width: "100%",
                    top: "80%",
                    opacity: 1 - progress,
                    animation: "bounce 0.8s infinite alternate",
                  }}
                  className="flex flex-col items-center"
                >
                  <ScrollTip />
                  <div>scroll</div>
                </div>
              </>
            )}
            <video
              style={{
                position: "fixed",
                minWidth: "100%",
                minHeight: "120%",
                top: "50%",
                left: "50%",
                width: "auto",
                height: "auto",
                transform: "translate(-50%, -50%)",
                zIndex: "-1",
                opacity: 0.4 - progress * 0.4,
                objectFit: "cover",
              }}
              autoPlay
              muted
              loop
              playsInline
              preload={"auto"}
              onLoadedData={() => {
                setLoaded(true);
              }}
            >
              <source src="/images/waves.mp4" />
            </video>
          </div>
        );
      }}
    </Scene>
  );
};

export default TitleScene;
