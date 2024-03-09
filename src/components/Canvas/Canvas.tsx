"use client";

import * as React from "react";
import { Canvas as ThreeCanvas } from "@react-three/fiber";

import "./Canvas.scss";

export const Canvas = () => (
  <ThreeCanvas className="app__canvas" camera={{ near: 0.1, far: 1000 }}>
    <directionalLight />
    <ambientLight />
    <pointLight />
    <spotLight />
    <hemisphereLight />
  </ThreeCanvas>
);
