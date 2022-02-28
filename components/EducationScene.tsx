import React from "react";
import { Scene } from "react-scrollmagic";

const EducationScene = () => (
  <Scene duration={2000} pin>
    {(progress: number) => (
      <div style={{ position: "relative" }}>
        <img
          src="images/graduation/grad1.jpg"
          width="auto"
          height="auto"
          style={{
            transform: "translateY(-350px)",
            position: "absolute",
            top: 0,
          }}
        />
        <img
          src="images/graduation/grad2.jpg"
          width="auto"
          height="auto"
          style={{
            transform: "translateY(-350px)",
            position: "absolute",
            top: 0,
          }}
        />
      </div>
    )}
  </Scene>
);

export default EducationScene;
