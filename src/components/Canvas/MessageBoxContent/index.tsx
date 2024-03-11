import * as React from "react";
import { RoundedBox, Text } from "@react-three/drei";

import {
  BUTTON_COLOR,
  BUTTON_TEXT_COLOR,
  FONT_URL,
  MESSAGE_BOX_TEXT_COLOR,
} from "@/constants";
import { MESSAGE_BOX_DATA } from "./componentConfig";

export type MessageBoxPropsType = {
  messageBoxId: string;
  showMessage: boolean;
  opacity: number;
  onButton3DClick: () => void;
  onPointerOver: () => void;
  onPointerOut: () => void;
  fontUrl?: string;
};

export const MessageBoxContent = ({
  messageBoxId,
  showMessage,
  opacity,
  onButton3DClick,
  onPointerOver,
  onPointerOut,
  fontUrl = FONT_URL,
}: MessageBoxPropsType) => (
  <group>
    <Text
      position={[0, 4.9, 0.5]}
      font={fontUrl}
      fontSize={1}
      fontWeight={600}
      color={MESSAGE_BOX_TEXT_COLOR}
      fillOpacity={opacity}
    >
      {showMessage && MESSAGE_BOX_DATA[messageBoxId].title}
    </Text>
    <Text
      position={[0, 3.7, 0.5]}
      font={fontUrl}
      fontSize={0.5}
      color={MESSAGE_BOX_TEXT_COLOR}
      fillOpacity={opacity}
    >
      {showMessage && MESSAGE_BOX_DATA[messageBoxId].description}
    </Text>
    {showMessage && (
      <group
        onClick={onButton3DClick}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <Text
          position={[0, 1.5, 0.5]}
          font={fontUrl}
          fontSize={0.5}
          color={BUTTON_TEXT_COLOR}
          fillOpacity={opacity}
        >
          {MESSAGE_BOX_DATA[messageBoxId].button}
        </Text>
        <RoundedBox
          position={[0, 1.5, 0.45]}
          args={[3.4, 1.3, 0.07]}
          radius={0.3}
        >
          <meshStandardMaterial color={BUTTON_COLOR} opacity={opacity} />
        </RoundedBox>
      </group>
    )}
  </group>
);
