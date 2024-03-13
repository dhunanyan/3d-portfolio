import * as React from "react";
import { Mac, Window } from "@/components";

import "./page.scss";

export default function CareerPathPage() {
  return (
    <div className="career-path">
      <Mac>
        <Window id="career-path" title="My career path" />
      </Mac>
    </div>
  );
}
