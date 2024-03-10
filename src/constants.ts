import { ModelVectorType } from "./models/types";

export const CAMERA_ZOOM: number = 1.38;
export const CAMERA_POSITION: ModelVectorType = [0, 30, 20];
export const CAMERA_ROTATION_OFFSET: ModelVectorType = [-0.3, 0, 0];
export const CAMERA_ROTATION: ModelVectorType = [
  CAMERA_ROTATION_OFFSET[0],
  CAMERA_ROTATION_OFFSET[1],
  CAMERA_ROTATION_OFFSET[2],
];
export const CAMERA_ROTATION_TO_MONITOR: ModelVectorType = [
  -0.19,
  CAMERA_ROTATION_OFFSET[1],
  CAMERA_ROTATION_OFFSET[2],
];
export const CAMERA_POSITION_TO_MONITOR: ModelVectorType = [0, 25, 20];
export const CAMERA_ZOOM_TO_MONITOR: number = 8;

export const ROTATION: ModelVectorType = [0, 0, 0];

export const WALL_ROTATION: ModelVectorType = [0, 0, 0];
export const WALL_SCALE: ModelVectorType = [10, 10, 10];

export const WALL_GRID_POSITION: ModelVectorType = [0, 120, 20];
export const WALL_GRID_SCALE: ModelVectorType = [2, 2, 2];
export const WALL_GRID_ROTATION: ModelVectorType = [0, 0, 0];

export const FLOOR_ROTATION: ModelVectorType = [0, 0, 0];
export const FLOOR_SCALE: ModelVectorType = [10, 10, 10];

export const FLOOR_GRID_SCALE: ModelVectorType = [2, 2, 2];
export const FLOOR_GRID_POSITION: ModelVectorType = [0, -60, 20];
export const FLOOR_GRID_ROTATION: ModelVectorType = [89.75, 0, 0];

export const BOX_SCALE = 0.45;
export const BOX_COLOR = "#2977e7";

export const BUTTON_COLOR = "#292929";
export const BUTTON_TEXT_COLOR = "#bad6fe";

export const STICK_SCALE: ModelVectorType = [0.07, 2.5, 0.07];
export const HIDDEN_STICK_SCALE: ModelVectorType = [0.03, 0, 0.07];
export const HIDDEN_STICK_POSITION: ModelVectorType = [0.07, 0, 0.07];

export const MESSAGE_BOX_COLOR = "#548CDB";
export const MESSAGE_BOX_TEXT_COLOR = "#181919";
export const MESSAGE_BOX_POSITION: ModelVectorType = [0, 3.12, 0];
export const HIDDEN_MESSAGE_BOX_SCALE: ModelVectorType = [0, 0.45 * 13, 0];
export const MESSAGE_BOX_SCALE: ModelVectorType = [0.45 * 30, 0.45 * 13, 0.33];

export const ARROW_COLOR = "#bad6fe";
export const ARROW_POSITION: ModelVectorType = [0, 1.2, 0];
export const ARROW_MOVEMENT_RANGE = [1.2, 0.6];
