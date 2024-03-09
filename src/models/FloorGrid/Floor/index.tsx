import * as THREE from "three";
import * as React from "react";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { ModelPropsType } from "../../types";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
  };
  materials: {
    ["Material.003"]: THREE.MeshStandardMaterial;
  };
};

export const Floor = ({ scale, position, rotation }: ModelPropsType) => {
  const floorRef = React.useRef(null);
  const { nodes, materials } = useGLTF("models/floor.glb") as GLTFResult;

  return (
    <group {...{ scale, position, rotation }} ref={floorRef}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Material.003"]}
        scale={[5, 1, 5]}
      />
    </group>
  );
};
