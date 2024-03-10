"use client";

import * as React from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";

import { MessageBoxContent } from "../MessageBoxContent";
import { Arrow } from "../Arrow";

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
  ARROW_COLOR,
  MESSAGE_BOX_COLOR,
} from "@/constants";

import { ModelVectorType } from "@/models/types";

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
    const arrowMovement = arrowUp ? arrowSpeed : -arrowSpeed;

    const stickAnimationSpeed = 0.06;
    const targetStickScale: ModelVectorType = shouldShowMessageBox
      ? STICK_SCALE
      : HIDDEN_STICK_SCALE;
    const targetStickPosition: ModelVectorType = shouldShowMessageBox
      ? [position[0], position[1] + 1.4, position[2]]
      : position;
    const messageBoxAnimationSpeed = 0.15;

    const targetMessageBoxScale: ModelVectorType = shouldShowMessageBox
      ? MESSAGE_BOX_SCALE
      : HIDDEN_MESSAGE_BOX_SCALE;

    const targetTextOpacity: number = shouldShowMessageBox ? 1 : 0;
    const textAnimationSpeed =
      targetTextOpacity === 1 && targetTextOpacity / 4 > textOpacity
        ? 0.01
        : 0.05;

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
    if (shouldShowMessageBox) {
      setMessageBoxId("");
      setTextOpacity(0);
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
    <group>
      <group position={stickPosition}>
        <Arrow
          position={arrowPosition}
          color={ARROW_COLOR}
          scale={[0.15, 0.15, 0.15]}
        />
        <mesh>
          <boxGeometry args={stickScale} />
          <meshStandardMaterial color={BOX_COLOR} />
        </mesh>
        <group position={MESSAGE_BOX_POSITION} scale={messageBoxScale}>
          <RoundedBox position={[0, 0, 0]} args={[1, 1, 1]} radius={0.01}>
            <meshStandardMaterial color={MESSAGE_BOX_COLOR} />
          </RoundedBox>
        </group>

        <MessageBoxContent
          messageBoxId={messageBoxId}
          showMessage={shouldShowMessageBox}
          opacity={textOpacity}
          onButton3DClick={onButton3DClick}
          onPointerOver={onPointerOver}
          onPointerOut={onPointerOut}
        />
      </group>
      <RoundedBox
        position={position}
        args={[BOX_SCALE * 1, BOX_SCALE * 1, BOX_SCALE * 1]}
        radius={0.1}
        onClick={onClick}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <meshStandardMaterial color={BOX_COLOR} />
        <pointLight
          color="#bad6fe"
          intensity={12}
          distance={4}
          decay={2.5}
          position={[0, 1, -1]}
        />
      </RoundedBox>
    </group>
  );
};
