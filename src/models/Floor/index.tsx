import * as THREE from "three";
import * as React from "react";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { ModelPropsType } from "../types";

import model from "@/assets/models/floor.glb";

type GLTFResult = GLTF & {
  nodes: {
    Plane_Stone_0: THREE.Mesh;
  };
  materials: {
    Stone: THREE.MeshStandardMaterial;
  };
};

export const Floor = ({ scale, position, rotation }: ModelPropsType) => {
  const floorRef = React.useRef(null);
  const { nodes, materials } = useGLTF(model) as GLTFResult;

  return (
    <group {...{ scale, position, rotation }} ref={floorRef}>
      <mesh
        geometry={nodes.Plane_Stone_0.geometry}
        material={materials.Stone}
      />
    </group>
  );
};
