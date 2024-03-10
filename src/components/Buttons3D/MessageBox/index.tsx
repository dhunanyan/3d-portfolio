import * as React from "react";

import { Text } from "@react-three/drei";
import { MESSAGE_BOX_DATA } from "./componentConfig";

export type MessageBoxPropsType = {
  messageBoxId: string;
  showMessage: boolean;
  opacity: number;
};

export const MessageBox = ({
  messageBoxId,
  showMessage,
  opacity,
}: MessageBoxPropsType) => (
  <group>
    <Text
      position={[0, 4.5, 0.1]}
      fontSize={1}
      fontWeight={600}
      color="#181919"
      fillOpacity={opacity}
    >
      {showMessage && MESSAGE_BOX_DATA[messageBoxId].title}
    </Text>
    <Text
      position={[0, 3, 0.1]}
      fontSize={0.5}
      color="#181919"
      fillOpacity={opacity}
    >
      {showMessage && MESSAGE_BOX_DATA[messageBoxId].description}
    </Text>
  </group>
);
