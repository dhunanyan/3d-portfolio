import * as React from "react";

import "./Window.scss";

export type WindowIDsType =
  | "not-found"
  | "about"
  | "career-path"
  | "contact"
  | "education"
  | "projects";

export type WindowPropsType = {
  id: WindowIDsType;
  title: string;
  children?: React.ReactNode;
};

export const Window = ({ title, id, children }: WindowPropsType) => (
  <div className={`window window--${id}`}>
    <div className="window__container">
      <div className="window__top">
        <div className="window__buttons">
          <button className="window__button window__button--close" />
          <button className="window__button window__button--minimize" />
          <button className="window__button window__button--resize" />
        </div>
        <h1 className="window__title">{title}</h1>
      </div>
      <div className="window__inner-box">{children}</div>
      <div className="window__bottom"></div>
    </div>
  </div>
);
