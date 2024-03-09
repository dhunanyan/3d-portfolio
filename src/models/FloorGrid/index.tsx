import * as React from "react";

import { Floor } from "@/models";
import { FLOOR_ROTATION, FLOOR_SCALE } from "@/constants";
import { FLOOR_GRID } from "./grid";

import { ModelPropsType } from "@/models/types";

export const FloorGrid = ({ scale, position, rotation }: ModelPropsType) => {
  const wallsGridRefRef = React.useRef(null);
  return (
    <group {...{ scale, position, rotation }} ref={wallsGridRefRef}>
      {FLOOR_GRID.map((XY, i) => (
        <Floor
          key={i}
          scale={FLOOR_SCALE}
          position={[
            2 * FLOOR_SCALE[0] * XY[0],
            2 * FLOOR_SCALE[0] * XY[1],
            10,
          ]}
          rotation={FLOOR_ROTATION}
        />
      ))}
    </group>
  );
};
