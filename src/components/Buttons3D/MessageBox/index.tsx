import * as React from "react";
import { RoundedBox } from "@react-three/drei";

import { Text } from "@react-three/drei";
import { MESSAGE_BOX_DATA } from "./componentConfig";

export type MessageBoxPropsType = {
  messageBoxId: string;
  showMessage: boolean;
  opacity: number;
  onButton3DClick: () => void;
  onPointerOver: () => void;
  onPointerOut: () => void;
};

export const MessageBox = ({
  messageBoxId,
  showMessage,
  opacity,
  onButton3DClick,
  onPointerOver,
  onPointerOut,
}: MessageBoxPropsType) => (
  <group>
    <Text
      position={[0, 4.9, 0.5]}
      fontSize={1}
      fontWeight={600}
      color="#181919"
      fillOpacity={opacity}
    >
      {showMessage && MESSAGE_BOX_DATA[messageBoxId].title}
    </Text>
    <Text
      position={[0, 3.7, 0.5]}
      fontSize={0.5}
      color="#181919"
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
          // onPointerEnter={}
          position={[0, 1.5, 0.5]}
          fontSize={0.5}
          color="#bad6fe"
          fillOpacity={opacity}
        >
          {MESSAGE_BOX_DATA[messageBoxId].button}
        </Text>
        <RoundedBox
          position={[0, 1.5, 0.45]}
          args={[3.2, 1.5, 0.07]}
          radius={0.3}
        >
          <meshStandardMaterial color={"#181919"} opacity={opacity} />
        </RoundedBox>
      </group>
    )}

    {/* <mesh
      position={[0, 1.3, 0.045]}
    >
      <boxGeometry args={[3, 1.5, 0.07]} />
      <meshStandardMaterial color={"#181919"} opacity={opacity} />
    </mesh> */}
  </group>
);
