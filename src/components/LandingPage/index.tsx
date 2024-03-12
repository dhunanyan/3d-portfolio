"use client";

import * as React from "react";

import "./LandingPage.scss";

export type LandingPagePropsType = {
  children?: React.ReactNode;
};

export const LandingPage = ({ children }: LandingPagePropsType) => (
  <div className="landing-page">
    <div className="landing-page__wallpaper" />
    <div className="landing-page__container">
      <div className="window">
        <div className="window__container">
          <div className="window__top">
            <div className="window__buttons">
              <button className="window__button window__button--close" />
              <button className="window__button window__button--minimize" />
              <button className="window__button window__button--resize" />
            </div>
            <h1 className="window__title">Projects</h1>
          </div>
          <div className="window__inner-box">{children}</div>
          <div className="window__bottom"></div>
        </div>
      </div>
    </div>
  </div>
);
