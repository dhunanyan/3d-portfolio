import * as React from "react";

import { ModelVectorType } from "@/models/types";

export type ArrowPropsType = {
  position: ModelVectorType;
  scale: ModelVectorType;
  color?: string;
  thickness?: number;
};

export const Arrow = ({
  position,
  color,
  scale = [0.2, 0.2, 0.2],
  thickness = 0.4,
}: ArrowPropsType) => {
  return (
    <group position={position} scale={scale} rotation={[50, 0, 0]}>
      <mesh rotation={[0, 0, 0.5]} position={[-0.55, 0, 0]}>
        <boxGeometry args={[thickness, 2.5, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <mesh rotation={[0, 0, -0.5]} position={[0.55, 0, 0]}>
        <boxGeometry args={[thickness, 2.5, thickness]} />
        <meshStandardMaterial color={color} />
      </mesh>
    </group>
  );
};
