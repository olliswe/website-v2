import { Scene } from "react-scrollmagic";
import { SplitColorChannelText } from "react-text-fun";
import React, { useEffect, useRef } from "react";

const HideScrollTipWrapper = ({ children, setScrolltipState }: any) => {
  useEffect(() => {
    setScrolltipState((prev: any) => ({ ...prev, hideText: true }));
    return () =>
      setScrolltipState((prev: any) => ({ ...prev, hideText: false }));
  }, [setScrolltipState]);
  return <>{children}</>;
};

const TitleScene = ({ setScrolltipState }: { setScrolltipState: any }) => {
  const initialProgress = useRef<number>();

  return (
    <Scene duration={1000} pin>
      {(progress: number) => {
        if (!initialProgress.current && progress > 0) {
          initialProgress.current = progress;
        }
        return (
          <div
            className="flex relative justify-center items-center"
            id="title-container"
          >
            {initialProgress.current && progress > initialProgress.current ? (
              // TODO: HIDE INSTEAD OF NOT RENDERING
              <HideScrollTipWrapper setScrolltipState={setScrolltipState}>
                <SplitColorChannelText
                  text="OLIVER IYER"
                  fontSize={40}
                  addBlur={true}
                  addNoise={true}
                  fontFamily={"oi-regular"}
                  rgbOffset={0.07 + progress - initialProgress.current}
                  rotation={-45}
                />
              </HideScrollTipWrapper>
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
            <img
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
              src="/images/clouds.gif"
            />
          </div>
        );
      }}
    </Scene>
  );
};

export default TitleScene;
