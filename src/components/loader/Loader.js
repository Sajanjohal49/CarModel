import React from "react";
import "./loader.css";
//Components

import { useProgress } from "@react-three/drei";

// React Spring
import { a, useTransition } from "@react-spring/web";

export default function Loader() {
  const { active, progress } = useProgress();
  const transition = useTransition(active, {
    from: { opacity: 1, progress: 0 },
    leave: { opacity: 0 },
    update: { progress },
  });
  return transition(
    ({ progress, opacity }, active) =>
      active && (
        <a.div className="loading" style={{ opacity }}>
          <div className="loading-bar-container">
            <a.div className="loading-bar" style={{ width: progress }}></a.div>
            <p className="text-white font-extralight text-base">Please wait ...</p>
          </div>
        </a.div>
      )
  );
}
