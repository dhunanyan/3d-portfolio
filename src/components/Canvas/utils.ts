import { ModelVectorType } from "@/models/types";
import { ROTATION } from "@/constants";

export const adjustModelForScreenSize = () => {
  let screenScale: ModelVectorType;
  let screenPosition: ModelVectorType;

  screenScale = [1, 1, 1];
  screenPosition = [0, -20, -43];

  if (typeof window === "undefined") {
    return [screenScale, screenPosition, ROTATION];
  }

  if (window.innerWidth <= 425) {
    screenScale = [20, 20, 20];
    screenPosition = [0, -12, -43];
    return [screenScale, screenPosition, ROTATION];
  }

  if (window.innerWidth <= 768) {
    screenScale = [25, 25, 25];
    screenPosition = [0, -12, -43];
    return [screenScale, screenPosition, ROTATION];
  }

  screenScale = [30, 30, 30];
  return [screenScale, screenPosition, ROTATION];
};
