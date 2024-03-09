"use client";

import React from "react";
import { Canvas } from "@/components";
import { MessageBox } from "@/components";

import "./View.scss";

export const View = () => {
  const [messageBoxId, setMessageBoxId] = React.useState<string>("");

  const onButtonPointerEnter = (id: string) => {
    document.body.style.cursor = "pointer";
    setMessageBoxId(id);
  };

  const onButtonPointerLeave = () => {
    document.body.style.cursor = "auto";
    setMessageBoxId("");
  };

  return (
    <div className="view">
      {messageBoxId && <MessageBox messageBoxId={messageBoxId} />}
      <Canvas
        onButtonPointerEnter={onButtonPointerEnter}
        onButtonPointerLeave={onButtonPointerLeave}
      />
    </div>
  );
};
