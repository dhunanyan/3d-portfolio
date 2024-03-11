"use client";

import * as React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { WebGLRenderer } from "three";
import { Canvas } from "@/components";

import "./View.scss";

export const View = () => {
  const rendererRef = React.useRef<WebGLRenderer | null>(null);

  React.useEffect(() => {
    return () => {
      if (rendererRef.current) {
        rendererRef.current.dispose();
      }
    };
  }, [rendererRef]);

  return (
    <div className="view">
      <ThreeCanvas onCreated={(state) => (rendererRef.current = state.gl)}>
        <Canvas />
      </ThreeCanvas>
    </div>
  );
};
