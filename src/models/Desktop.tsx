import React, { useRef, useEffect } from "react";
import { Mesh } from "three";

import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

export type ModelPropsType = {};

export const Desktop = (props: ModelPropsType) => {
  const desktopRef = useRef(null);
  const { nodes, materials } = useGLTF("models/desktop.glb");
  return (
    <group {...props} ref={desktopRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.124}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh
              geometry={(nodes.Object_6 as Mesh).geometry}
              material={materials.white_base}
            />
            <mesh
              geometry={(nodes.Object_9 as Mesh).geometry}
              material={materials.glass}
            />
            <mesh
              geometry={(nodes.Object_12 as Mesh).geometry}
              material={materials.white_base_2}
            />
          </group>
        </group>
      </group>
    </group>
  );
};
