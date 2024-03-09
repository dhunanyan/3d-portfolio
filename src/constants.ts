import { ModelVectorType } from "./models/types";

export const ROTATION: ModelVectorType = [2 * Math.PI * 0.115, 0, 0];

export const WALL_ROTATION: ModelVectorType = [0, 0, 0];
export const WALL_SCALE: ModelVectorType = [10, 10, 10];

export const WALL_GRID_POSITION: ModelVectorType = [0, -80, 20];
export const WALL_GRID_SCALE: ModelVectorType = [10, 10, 10];
export const WALL_GRID_ROTATION: ModelVectorType = [2 * Math.PI * 0.115, 0, 0];

export const FLOOR_ROTATION: ModelVectorType = [190, 0, 0];
export const FLOOR_SCALE: ModelVectorType = [5, 5, 5];

export const FLOOR_GRID_SCALE: ModelVectorType = [14, 14, 14];
export const FLOOR_GRID_POSITION: ModelVectorType = [0, 40, -80];
export const FLOOR_GRID_ROTATION: ModelVectorType = [
  -1.4 + 2 * Math.PI * 0.115,
  0,
  0,
];
