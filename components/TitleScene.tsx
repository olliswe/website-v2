import { Scene } from "react-scrollmagic";
import { SplitColorChannelText } from "react-text-fun";
import { animated, Spring, SpringValue } from "react-spring";
import { useRef, useState } from "react";

const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const AnimatedSplitColorChannelText = animated(
  ({
    rgbOffset,
    rotation,
  }: {
    rgbOffset: SpringValue<number>;
    rotation: SpringValue<number>;
  }) => (
    <SplitColorChannelText
      text="OLIVER IYER"
      fontSize={40}
      addBlur={true}
      addNoise={true}
      fontFamily={"oi-regular"}
      rgbOffset={rgbOffset}
      rotation={rotation}
    />
  )
);

const TitleScene = () => {
  const [flip, setFlip] = useState(false);
  const [duration, setDuration] = useState(1000);
  const [delay, setDelay] = useState(3000);
  const initialProgress = useRef<number>();

  const onRest = () => {
    setFlip((prev) => !prev);
    setDuration(getRandomArbitrary(1500, 2000));
    setDelay(getRandomArbitrary(2000, 5000));
  };

  return (
    <Scene duration={1000} pin>
      {(progress: number) => {
        if (!initialProgress.current && progress > 0) {
          console.log(progress);
          initialProgress.current = progress;
        }
        return (
          <div className="flex justify-center items-center">
            {initialProgress.current && progress > initialProgress.current ? (
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
              <Spring
                from={{ rgbOffset: 0.07, rotation: -45 }}
                to={{ rgbOffset: 0.3, rotation: 45 }}
                config={{ duration }}
                reset={true}
                reverse={flip}
                delay={flip ? 0 : delay}
                onRest={onRest}
              >
                {({ rgbOffset, rotation }) => (
                  <AnimatedSplitColorChannelText
                    rgbOffset={rgbOffset}
                    rotation={rotation}
                  />
                )}
              </Spring>
            )}
          </div>
        );
      }}
    </Scene>
  );
};

export default TitleScene;
