import * as React from "react";
import { Mac, Window } from "@/components";

import "./page.scss";

export default function ContactPage() {
  return (
    <div className="contact">
      <Mac>
        <Window id="contact" title="Contact" />
      </Mac>
    </div>
  );
}
