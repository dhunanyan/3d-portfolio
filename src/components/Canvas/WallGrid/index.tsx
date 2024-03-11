import * as React from "react";
import { Wall } from "@/models";

import { WALL_ROTATION, WALL_SCALE } from "@/constants";
import { WALL_GRID } from "./grid";

import { ModelPropsType, ModelVectorType } from "@/models/types";

export const WallGrid = ({ scale, position, rotation }: ModelPropsType) => {
  const wallsGridRefRef = React.useRef(null);

  return (
    <group {...{ scale, position, rotation }} ref={wallsGridRefRef}>
      {WALL_GRID.map((XY, i) => (
        <Wall
          key={i}
          scale={WALL_SCALE}
          position={
            [
              3 * WALL_SCALE[0] * XY[0],
              3 * WALL_SCALE[0] * XY[1],
              -60,
            ] as ModelVectorType
          }
          rotation={WALL_ROTATION}
        />
      ))}
    </group>
  );
};
