"use client";

import * as React from "react";

import "./Mac.scss";

export type MacPropsType = {
  children?: React.ReactNode;
};

export const Mac = ({ children }: MacPropsType) => (
  <div className="landing-page">
    <div className="landing-page__wallpaper" />
    <div className="landing-page__container">{children}</div>
  </div>
);
