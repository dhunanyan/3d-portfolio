import * as React from "react";

import { BOX_COLOR, BOX_SCALE } from "@/constants";
import { ModelVectorType } from "@/models/types";

export type Button3DPropsType = {
  position: ModelVectorType;
  onClick: () => void;
  onButtonPointerEnter: () => void;
  onButtonPointerLeave: () => void;
};

export const Button3D = ({
  position,
  onClick,
  onButtonPointerEnter,
  onButtonPointerLeave,
}: Button3DPropsType) => (
  <mesh
    position={position}
    onClick={onClick}
    onPointerOver={onButtonPointerEnter}
    onPointerOut={onButtonPointerLeave}
  >
    <boxGeometry args={[BOX_SCALE * 1, BOX_SCALE * 1, BOX_SCALE * 1]} />
    <meshStandardMaterial color={BOX_COLOR} />
  </mesh>
);
