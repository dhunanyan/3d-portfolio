import * as THREE from "three";
import * as React from "react";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { ModelPropsType } from "../../types";

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
  const { nodes, materials } = useGLTF("models/floor.glb") as GLTFResult;

  return (
    <mesh
      ref={floorRef}
      {...{ scale, position, rotation }}
      geometry={nodes.Plane_Stone_0.geometry}
      material={materials.Stone}
    />
  );
};
