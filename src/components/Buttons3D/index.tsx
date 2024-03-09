import * as React from "react";

import { Button3D } from "./Button3D/Button3D";
import { BUTTONS } from "./componentConfig";

export type Buttons3DPropsType = {
  onClick: (id: string) => void;
  onButtonPointerEnter: (id: string) => void;
  onButtonPointerLeave: () => void;
};

export const Buttons3D = ({
  onClick,
  onButtonPointerEnter,
  onButtonPointerLeave,
}: Buttons3DPropsType) =>
  BUTTONS.map((button) => (
    <Button3D
      key={button.id}
      onButtonPointerEnter={() => onButtonPointerEnter(button.id)}
      onButtonPointerLeave={onButtonPointerLeave}
      position={button.position}
      onClick={() => onClick(button.id)}
    />
  ));
