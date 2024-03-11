import React, { useRef } from "react";
import * as THREE from "three";

import { ModelPropsType } from "../types";

export const MacWallpaper = ({ scale, position, rotation }: ModelPropsType) => {
  const boxRef = useRef<THREE.Mesh>(null);
  const wallpaper = "/images/background.png";

  return (
    <mesh ref={boxRef} position={position} rotation={rotation} scale={scale}>
      <boxGeometry args={[20.8, 12.1, 0]} />
      <meshBasicMaterial map={new THREE.TextureLoader().load(wallpaper)} />
    </mesh>
  );
};
