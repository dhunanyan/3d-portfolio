"use client";

import * as React from "react";
import * as THREE from "three";
import { useRouter } from "next/navigation";
import { useFrame } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";

import { Desktop, MacWallpaper } from "@/models";

import { FloorGrid } from "./FloorGrid";
import { WallGrid } from "./WallGrid";
import { Buttons3D } from "./Buttons3D";

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
  MAC_WALLPAPER_POSITION,
  MAC_WALLPAPER_ROTATION,
  MAC_WALLPAPER_SCALE,
  WALL_GRID_POSITION,
  WALL_GRID_ROTATION,
  WALL_GRID_SCALE,
} from "@/constants";

import { ModelVectorType } from "@/models/types";

import "./Canvas.scss";

export const Canvas = () => {
  const router = useRouter();
  const [page, setPage] = React.useState<string>("");
  const cameraRef = React.useRef<THREE.PerspectiveCamera>(null);
  const [isCameraBlocked, setIsCameraBlock] = React.useState<boolean>(false);
  const [target, setTarget] = React.useState<{
    position: ModelVectorType;
    rotation: ModelVectorType;
    zoom: number;
  }>({
    position: CAMERA_POSITION,
    rotation: CAMERA_ROTATION,
    zoom: CAMERA_ZOOM,
  });
  const [modelScale, modelPosition, modelRotation] = adjustModelForScreenSize();

  const lerp = (current: number, target: number, speed: number) =>
    current + speed * (target - current);

  useFrame(() => {
    if (!isCameraBlocked) {
      return;
    }

    const camera = cameraRef.current as THREE.PerspectiveCamera;
    const { position, rotation, zoom } = camera;

    const [pX, pY, pZ] = target.position;
    const [rX, rY, rZ] = target.rotation;
    const targetZoom = target.zoom;

    const positionAnimationSpeed = 0.01;
    const rotationAnimationSpeed = 0.06;
    const zoomAnimationSpeed = 0.036;

    const newPosition: ModelVectorType = [
      lerp(position.x, pX, positionAnimationSpeed),
      lerp(position.y, pY, positionAnimationSpeed),
      lerp(position.z, pZ, positionAnimationSpeed),
    ];
    const newRotation: ModelVectorType = [
      lerp(rotation.x, rX, rotationAnimationSpeed),
      lerp(rotation.y, rY, rotationAnimationSpeed),
      lerp(rotation.z, rZ, rotationAnimationSpeed),
    ];
    const newZoom = lerp(zoom, targetZoom, zoomAnimationSpeed);

    camera.position.set(...newPosition);
    camera.rotation.set(...newRotation);
    camera.zoom = newZoom;

    camera.updateProjectionMatrix();

    const isAnimationFinished =
      newPosition.every((val) => Math.abs(val - pX) < 28) &&
      newRotation.every((val) => Math.abs(val - rX) < 0.191) &&
      Math.abs(newZoom - targetZoom) < 1.6;

    if (isAnimationFinished) {
      router.push(`/${page}`);
    }
  });

  React.useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const camera = cameraRef.current as THREE.PerspectiveCamera;
      const { clientX, clientY } = event;

      camera.rotation.set(
        CAMERA_ROTATION_OFFSET[0] +
          (clientY - window.innerHeight / 2) * -0.00005,
        (clientX - window.innerWidth / 2) * -0.00009,
        0
      );
    };

    if (!isCameraBlocked) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isCameraBlocked]);

  const onButton3DClick = (id: string) => {
    setIsCameraBlock(true);
    setPage(id);
    setTarget({
      position: CAMERA_POSITION_TO_MONITOR,
      rotation: CAMERA_ROTATION_TO_MONITOR,
      zoom: CAMERA_ZOOM_TO_MONITOR,
    });
  };

  return (
    <>
      <PerspectiveCamera
        makeDefault
        ref={cameraRef}
        position={CAMERA_POSITION}
        rotation={CAMERA_ROTATION}
        zoom={CAMERA_ZOOM}
        far={1000}
        near={0.2}
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
      <MacWallpaper
        scale={MAC_WALLPAPER_POSITION}
        position={MAC_WALLPAPER_ROTATION}
        rotation={MAC_WALLPAPER_SCALE}
      />
    </>
  );
};
