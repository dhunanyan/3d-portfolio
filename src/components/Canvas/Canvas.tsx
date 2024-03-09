"use client";

import * as React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { PerspectiveCamera, Stage } from "@react-three/drei";

import { Desktop, WallGrid, FloorGrid } from "@/models";
import { adjustModelForScreenSize } from "./utils";

import {
  FLOOR_GRID_POSITION,
  FLOOR_GRID_ROTATION,
  FLOOR_GRID_SCALE,
  WALL_GRID_POSITION,
  WALL_GRID_ROTATION,
  WALL_GRID_SCALE,
} from "@/constants";

import "./Canvas.scss";
import { ModelVectorType } from "@/models/types";

export const Canvas = () => {
  const [cameraRotation, setCameraRotation] = React.useState<ModelVectorType>([
    2 * Math.PI * 0.95,
    0,
    0,
  ]);
  const [cameraPosition, setCameraPosition] = React.useState<ModelVectorType>([
    0, 30, 20,
    // 0, 30, 560,
  ]);
  const [modelScale, modelPosition, modelRotation] = adjustModelForScreenSize();

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      console.log(clientY);

      setCameraRotation([
        2 * Math.PI * 0.95 + (clientY - window.innerHeight / 2) * -0.00005,
        (clientX - window.innerWidth / 2) * -0.00009,
        0,
      ]);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <ThreeCanvas className="app__canvas">
      <PerspectiveCamera
        makeDefault
        position={cameraPosition}
        rotation={cameraRotation}
        near={0.2}
        far={1000}
        zoom={1.38}
      />
      <directionalLight position={[1, -5, 0.5]} intensity={2} />
      <directionalLight position={[-3.5, 80, 250]} intensity={1} />
      <directionalLight position={[-3.5, 0.8, 0]} intensity={4} />
      <ambientLight intensity={0.5} />
      <hemisphereLight color="#b1e1ff" groundColor="#303030" intensity={1} />
      <FloorGrid
        position={FLOOR_GRID_POSITION}
        scale={FLOOR_GRID_SCALE}
        rotation={FLOOR_GRID_ROTATION}
      />
      <WallGrid
        position={WALL_GRID_POSITION}
        scale={WALL_GRID_SCALE}
        rotation={WALL_GRID_ROTATION}
      />
      <Desktop
        position={modelPosition}
        scale={modelScale}
        rotation={modelRotation}
      />
    </ThreeCanvas>
  );
};
