"use client";

import * as React from "react";

import "./Mac.scss";

export type MacPropsType = {
  children?: React.JSX.Element;
};

export const Mac = ({ children }: MacPropsType) => {
  const [isResized, resize] = React.useState<boolean>(false);

  console.log(isResized);

  return (
    <div className="landing-page">
      <div className="landing-page__wallpaper" />
      <div
        className={
          "landing-page__container" +
          (isResized ? " landing-page__container--resized" : "")
        }
      >
        {children &&
          React.cloneElement(children, {
            resize: () => resize((prev) => !prev),
          })}
      </div>
    </div>
  );
};
