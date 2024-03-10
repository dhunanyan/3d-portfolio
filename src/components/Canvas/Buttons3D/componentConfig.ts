import { ModelVectorType } from "@/models/types";

export type ButtonDataType = {
  position: ModelVectorType;
  id: string;
};

export const BUTTONS: ButtonDataType[] = [
  {
    id: "career-path",
    position: [10.8, 0, -35.6],
  },
  {
    id: "projects",
    position: [0, 0, -40],
  },
  {
    id: "studies",
    position: [17.5, 6, -43.5],
  },
  {
    id: "about",
    position: [-12.5, 0, -36.5],
  },
  {
    id: "contact",
    position: [-16, 5.6, -40],
  },
];
