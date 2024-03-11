import * as React from "react";

import { Loader } from "@/components";
import { View } from "@/components";

import "./page.scss";

export default function App() {
  return (
    <div className="app">
      <React.Suspense fallback={<Loader />}>
        <View />
      </React.Suspense>
    </div>
  );
}
