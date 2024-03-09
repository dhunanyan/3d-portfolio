"use client";

import * as React from "react";
import * as THREE from "three";
import { Canvas as ThreeCanvas } from "@react-three/fiber";

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

export const Canvas = () => {
  const [modelScale, modelPosition, modelRotation] = adjustModelForScreenSize();

  return (
    <ThreeCanvas className="app__canvas" camera={{ near: 0.1, far: 1000 }}>
      <color attach="background" args={["#80abe9"]} />
      <directionalLight position={[1, -5, 0.5]} intensity={2} />
      <ambientLight intensity={0.5} />
      <hemisphereLight color="#b1e1ff" groundColor="#303030" intensity={1} />
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
      <FloorGrid
        position={FLOOR_GRID_POSITION}
        scale={FLOOR_GRID_SCALE}
        rotation={FLOOR_GRID_ROTATION}
      />
    </ThreeCanvas>
  );
};
