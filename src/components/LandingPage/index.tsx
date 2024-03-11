"use client";

import * as React from "react";

import "./LandingPage.scss";

export default function LandingPage() {
  return (
    <div className={`landing-page`}>
      <div className={`landing-page__wallpaper`} />
      <div className={"landing-page__window"}></div>
    </div>
  );
}
