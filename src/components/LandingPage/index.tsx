"use client";

import * as React from "react";

import "./LandingPage.scss";

const ANIMATIONS_STEPS = ["step-1", "step-2"];

export default function LandingPage() {
  return (
    <div className={`landing-page`}>
      <div className={`landing-page__wallpaper`} />
      <div className={"landing-page__window"}></div>
    </div>
  );
}
