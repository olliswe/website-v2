import { Scene } from "react-scrollmagic";
import { SplitColorChannelText } from "react-text-fun";
import { animated, Spring, SpringValue } from "react-spring";
import { useState } from "react";
import { Simulate } from "react-dom/test-utils";
import progress = Simulate.progress;

const getRandomArbitrary = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const AnimatedSplitColorChannelText = animated(
  ({ rgbOffset }: { rgbOffset: SpringValue<number> }) => (
    <SplitColorChannelText
      text="OLIVER IYER"
      fontSize={40}
      addBlur={true}
      addNoise={true}
      fontFamily={"oi-regular"}
      rgbOffset={rgbOffset}
      rotation={45}
    />
  )
);

const TitleScene = () => {
  const [flip, setFlip] = useState(false);
  const [duration, setDuration] = useState(1000);
  const [delay, setDelay] = useState(3000);

  const onRest = () => {
    setFlip((prev) => !prev);
    setDuration(getRandomArbitrary(800, 1500));
    setDelay(getRandomArbitrary(2000, 5000));
  };

  return (
    <Scene duration={1000} pin>
      {(progress: number) => (
        <div className="flex justify-center items-center">
          {progress > 0.4 ? (
            <SplitColorChannelText
              text="OLIVER IYER"
              fontSize={40}
              addBlur={true}
              addNoise={true}
              fontFamily={"oi-regular"}
              rgbOffset={0.1}
              rotation={-progress * 180}
            />
          ) : (
            <Spring
              from={{ rgbOffset: 0.05 }}
              to={{ rgbOffset: 0.1 }}
              config={{ duration }}
              reset={true}
              reverse={flip}
              delay={flip ? 0 : delay}
              onRest={onRest}
            >
              {({ rgbOffset }) => (
                <AnimatedSplitColorChannelText rgbOffset={rgbOffset} />
              )}
            </Spring>
          )}
        </div>
      )}
    </Scene>
  );
};

export default TitleScene;
