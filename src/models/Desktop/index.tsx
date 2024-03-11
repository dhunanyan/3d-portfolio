import * as THREE from "three";
import * as React from "react";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { ModelPropsType } from "../types";
import model from "@/assets/models/desktop.glb";

type GLTFResult = GLTF & {
  nodes: {
    Object_6: THREE.Mesh;
    Object_9: THREE.Mesh;
    Object_12: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
    glass: THREE.Material;
    white_base: THREE.Material;
    white_base_2: THREE.Material;
  };
};

export const Desktop = ({ scale, position, rotation }: ModelPropsType) => {
  const desktopRef = React.useRef(null);
  const { nodes, materials } = useGLTF(model) as GLTFResult;

  return (
    <group {...{ scale, position, rotation }} ref={desktopRef}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={1.124}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group scale={0.01}>
            <mesh
              geometry={(nodes.Object_6 as THREE.Mesh).geometry}
              material={materials.white_base}
            />
            <mesh
              geometry={(nodes.Object_9 as THREE.Mesh).geometry}
              material={materials.glass}
            />
            <mesh
              geometry={(nodes.Object_12 as THREE.Mesh).geometry}
              material={materials.white_base_2}
            />
          </group>
        </group>
      </group>
    </group>
  );
};
