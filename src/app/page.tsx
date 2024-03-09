import React from "react";
import { Canvas } from "@/components/Canvas/Canvas";
import { MessageBox } from "@/components/MessageBox/MessageBox";
import { Loader } from "@/components/Loader/Loader";
import "./page.scss";

{
  /* <MessageBox title="Hi I'm Davit!" description="A Software Engineer" /> */
}

export default function App() {
  return (
    <div className="app">
      <React.Suspense fallback={<Loader />}>
        <Canvas />
      </React.Suspense>
    </div>
  );
}
