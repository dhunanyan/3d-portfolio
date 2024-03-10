"use client";

import React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";
import { Canvas } from "@/components";

import "./View.scss";

export const View = () => {
  return (
    <div className="view">
      <ThreeCanvas className="app__canvas">
        <Canvas />
      </ThreeCanvas>
    </div>
  );
};
