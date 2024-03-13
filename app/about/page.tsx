import * as React from "react";
import { Mac, Window } from "@/components";

import "./page.scss";

export default function AboutPage() {
  return (
    <div className="about">
      <Mac>
        <Window id="about" title="About me" />
      </Mac>
    </div>
  );
}
