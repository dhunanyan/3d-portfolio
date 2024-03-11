"use client";

import * as React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { WebGLRenderer } from "three";
import { Canvas } from "@/components";

import "./View.scss";

export const View = () => {
  const rendererRef = React.useRef<WebGLRenderer | null>(null);
  const [isBlur, setIsBlur] = React.useState<boolean>(false);
  const blur = () => {
    setIsBlur(true);
  };

  React.useEffect(() => {
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, []);

  return (
    <div className={`view${isBlur ? " view--blur" : ""}`}>
      <ThreeCanvas onCreated={(state) => (rendererRef.current = state.gl)}>
        <Canvas blur={blur} />
      </ThreeCanvas>
    </div>
  );
};
