import * as React from "react";
import Link from "next/link";

import { Mac, Window } from "@/components";
import { ERROR_PAE_RANDOM_TEXT } from "@/constants";

import "./not-found.scss";

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <Mac>
        <Window id="not-found" title="Not found">
          <div className="not-found__container">
            <div
              className="not-found__background"
              dangerouslySetInnerHTML={{ __html: ERROR_PAE_RANDOM_TEXT }}
            />
            <div className="not-found__content">
              <h1 className="not-found__title">404 ERROR</h1>
              <h2 className="not-found__subtitle">PAGE NOT FOUND</h2>
              <p className="not-found__description">
                There&apos;s no such page. Please check the path you&apos;re
                trying to access.
              </p>
              <Link className="not-found__link" href="/">
                Back to main page
              </Link>
            </div>
          </div>
        </Window>
      </Mac>
    </div>
  );
}
