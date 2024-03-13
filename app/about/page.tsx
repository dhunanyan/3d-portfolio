import * as React from "react";
import { Mac, Window } from "@/components";

import "./page.scss";

export default function AboutPage() {
  return (
    <div className="about">
      <Mac>
        <Window title="about" />
      </Mac>
    </div>
  );
}
