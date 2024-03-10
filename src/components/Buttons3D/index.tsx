import * as React from "react";

import { Button3D } from "./Button3D";
import { BUTTONS } from "./componentConfig";

export type Buttons3DPropsType = {
  onButton3DClick: (id: string) => void;
};

export const Buttons3D = ({ onButton3DClick }: Buttons3DPropsType) => {
  const [messageBoxId, setMessageBoxId] = React.useState<string>("");

  return BUTTONS.map((button) => (
    <Button3D
      key={button.id}
      id={button.id}
      messageBoxId={messageBoxId}
      position={button.position}
      onButton3DClick={() => onButton3DClick(button.id)}
      setMessageBoxId={setMessageBoxId}
      shouldShowMessageBox={button.id === messageBoxId}
    />
  ));
};
