import * as React from "react";

import "./LoaderPage.scss";

export const LoaderPage = () => (
  <div className="loader-page">
    <svg
      className="loader-page__spinner"
      viewBox="0 0 66 66"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="loader-page__path"
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
      ></circle>
    </svg>
  </div>
);
