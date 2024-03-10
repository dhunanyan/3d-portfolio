"use client";

import * as React from "react";

import {
  BOX_COLOR,
  BOX_SCALE,
  HIDDEN_STICK_SCALE,
  MESSAGE_BOX_POSITION,
  MESSAGE_BOX_SCALE,
  STICK_SCALE,
  HIDDEN_MESSAGE_BOX_SCALE,
  HIDDEN_STICK_POSITION,
  ARROW_POSITION,
  ARROW_MOVEMENT_RANGE,
} from "@/constants";
import { ModelVectorType } from "@/models/types";
import { MessageBox } from "../MessageBox";
import { useFrame } from "@react-three/fiber";
import { Arrow } from "../Arrow";

export type Button3DPropsType = {
  id: string;
  messageBoxId: string;
  position: ModelVectorType;
  onButton3DClick: () => void;
  setMessageBoxId: (id: string) => void;
  shouldShowMessageBox: boolean;
};

export const Button3D = ({
  id,
  messageBoxId,
  position,
  onButton3DClick,
  setMessageBoxId,
  shouldShowMessageBox,
}: Button3DPropsType) => {
  const [stickScale, setStickScale] =
    React.useState<ModelVectorType>(HIDDEN_STICK_SCALE);
  const [stickPosition, setStickPosition] = React.useState<ModelVectorType>(
    HIDDEN_STICK_POSITION
  );
  const [messageBoxScale, setMessageBoxScale] = React.useState<ModelVectorType>(
    HIDDEN_MESSAGE_BOX_SCALE
  );
  const [textOpacity, setTextOpacity] = React.useState<number>(0);
  const [arrowPosition, setArrowPosition] =
    React.useState<ModelVectorType>(ARROW_POSITION);
  const [arrowUp, setArrowUp] = React.useState<boolean>(true);

  const updateValue = (
    currentValue: ModelVectorType,
    targetValue: ModelVectorType,
    speed: number
  ) =>
    currentValue.map(
      (value, index) => value + (targetValue[index] - value) * speed
    ) as ModelVectorType;

  useFrame(() => {
    const arrowSpeed = 0.02;
    const stickAnimationSpeed = 0.06;
    const messageBoxAnimationSpeed = 0.15;
    const textAnimationSpeed = 0.05;

    const targetStickPosition: ModelVectorType = shouldShowMessageBox
      ? [position[0], position[1] + 1.4, position[2]]
      : position;
    const targetStickScale: ModelVectorType = shouldShowMessageBox
      ? STICK_SCALE
      : HIDDEN_STICK_SCALE;
    const targetMessageBoxScale: ModelVectorType = shouldShowMessageBox
      ? MESSAGE_BOX_SCALE
      : HIDDEN_MESSAGE_BOX_SCALE;
    const targetTextOpacity: number = shouldShowMessageBox ? 1 : 0;
    const arrowMovement = arrowUp ? arrowSpeed : -arrowSpeed;

    setStickScale((prevScale) =>
      updateValue(prevScale, targetStickScale, stickAnimationSpeed)
    );
    setStickPosition((prevPosition) =>
      updateValue(prevPosition, targetStickPosition, stickAnimationSpeed)
    );
    setMessageBoxScale((prevScale) =>
      updateValue(prevScale, targetMessageBoxScale, messageBoxAnimationSpeed)
    );
    setTextOpacity(
      (prevOpacity) =>
        prevOpacity + (targetTextOpacity - prevOpacity) * textAnimationSpeed
    );
    setArrowPosition((prevPosition) => [
      prevPosition[0],
      prevPosition[1] + arrowMovement,
      prevPosition[2],
    ]);

    if (arrowUp && arrowPosition[1] > ARROW_MOVEMENT_RANGE[0]) {
      setArrowUp(false);
    } else if (!arrowUp && arrowPosition[1] < ARROW_MOVEMENT_RANGE[1]) {
      setArrowUp(true);
    }
  });

  const onClick = () => {
    document.body.style.cursor = "pointer";

    if (shouldShowMessageBox) {
      setMessageBoxId("");
      onButton3DClick();
      return;
    }

    setMessageBoxId(id);
  };

  const onPointerOver = () => {
    document.body.style.cursor = "pointer";
  };

  const onPointerOut = () => {
    document.body.style.cursor = "auto";
  };

  return (
    <group
      onClick={onClick}
      onPointerOver={onPointerOver}
      onPointerOut={onPointerOut}
    >
      <group position={stickPosition}>
        <Arrow
          position={arrowPosition}
          color="#bad6fe"
          scale={[0.15, 0.15, 0.15]}
        />
        <mesh>
          <boxGeometry args={stickScale} />
          <meshStandardMaterial color={BOX_COLOR} />
        </mesh>
        <mesh position={MESSAGE_BOX_POSITION}>
          <boxGeometry args={messageBoxScale} />
          <meshStandardMaterial color={BOX_COLOR} />
        </mesh>
        <MessageBox
          messageBoxId={messageBoxId}
          showMessage={shouldShowMessageBox}
          opacity={textOpacity}
        />
      </group>

      <mesh position={position}>
        <boxGeometry args={[BOX_SCALE * 1, BOX_SCALE * 1, BOX_SCALE * 1]} />
        <meshStandardMaterial color={BOX_COLOR} />
        <pointLight
          color="#bad6fe"
          intensity={12}
          distance={4}
          decay={2.5}
          position={[0, 1, -1]}
        />
      </mesh>
    </group>
  );
};
