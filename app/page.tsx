import * as React from "react";

import { LoaderPage } from "@/components";
import { View } from "@/components";

import "./page.scss";

export default function App() {
  return (
    <div className="app">
      <React.Suspense fallback={<LoaderPage />}>
        <View />
      </React.Suspense>
    </div>
  );
}
