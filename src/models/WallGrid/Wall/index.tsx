import * as THREE from "three";
import * as React from "react";

import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

import { ModelPropsType } from "../../types";

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
  };
  materials: {
    ["Scene_-_Root"]: THREE.MeshStandardMaterial;
  };
};

export const Wall = ({ scale, position, rotation }: ModelPropsType) => {
  const wallRef = React.useRef(null);
  const { nodes, materials } = useGLTF("models/wall.glb") as GLTFResult;

  return (
    <group {...{ scale, position, rotation }} ref={wallRef}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials["Scene_-_Root"]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Scene_-_Root"]}
        position={[-0.758, 1.712, 0.051]}
        scale={[1, 1, 0.075]}
      />
    </group>
  );
};
