"use client";

import * as React from "react";
import { Canvas as ThreeCanvas, useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import { Desktop, WallGrid, FloorGrid } from "@/models";
import { Buttons3D } from "@/components";

import { adjustModelForScreenSize } from "./utils";

import {
  CAMERA_POSITION,
  CAMERA_POSITION_TO_MONITOR,
  CAMERA_ROTATION,
  CAMERA_ROTATION_OFFSET,
  CAMERA_ROTATION_TO_MONITOR,
  CAMERA_ZOOM,
  CAMERA_ZOOM_TO_MONITOR,
  FLOOR_GRID_POSITION,
  FLOOR_GRID_ROTATION,
  FLOOR_GRID_SCALE,
  WALL_GRID_POSITION,
  WALL_GRID_ROTATION,
  WALL_GRID_SCALE,
} from "@/constants";

import { ModelVectorType } from "@/models/types";
import "./Canvas.scss";

export const Canvas = () => {
  const [stage, setStage] = React.useState<string>("");
  const [cameraRotation, setCameraRotation] =
    React.useState<ModelVectorType>(CAMERA_ROTATION);
  const [cameraPosition, setCameraPosition] =
    React.useState<ModelVectorType>(CAMERA_POSITION);
  const [cameraZoom, setCameraZoom] = React.useState<number>(CAMERA_ZOOM);
  const [isCameraBlocked, setIsCameraBlock] = React.useState<boolean>(false);

  const [modelScale, modelPosition, modelRotation] = adjustModelForScreenSize();

  const updateValue = (
    currentValue: ModelVectorType,
    targetValue: ModelVectorType,
    speed: number
  ) =>
    currentValue.map((value, index) => {
      if (targetValue[index] - value >= 0.001) {
        return value + (targetValue[index] - value) * speed;
      } else {
        return targetValue[index];
      }
    }) as ModelVectorType;

  const onButton3DClick = (id: string) => {
    // setStage(id);
    // setIsCameraBlock(true);
  };

  React.useEffect(() => {
    if (isCameraBlocked) {
      return;
    }
    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;

      setCameraRotation([
        CAMERA_ROTATION_OFFSET[0] +
          (clientY - window.innerHeight / 2) * -0.00005,
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
  }, [isCameraBlocked]);

  return (
    <>
      <PerspectiveCamera
        makeDefault
        position={cameraPosition}
        rotation={cameraRotation}
        near={0.2}
        far={1000}
        zoom={cameraZoom}
      />
      <directionalLight position={[1, -5, 0.5]} intensity={6} />
      <directionalLight position={[-3.5, 80, 250]} intensity={2.4} />
      <directionalLight position={[-3.5, 0.8, 0]} intensity={1} />
      <ambientLight intensity={0.5} />
      <hemisphereLight color="#b1e1ff" groundColor="#89b941" intensity={0.3} />
      <Buttons3D onButton3DClick={onButton3DClick} />
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
    </>
  );
};
