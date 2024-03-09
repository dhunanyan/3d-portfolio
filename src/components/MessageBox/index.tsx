import * as React from "react";

import "./MessageBox.scss";
import { MESSAGE_BOX_DATA } from "./componentConfig";

export type MessageBoxPropsType = {
  messageBoxId: string;
};

export const MessageBox = ({ messageBoxId }: MessageBoxPropsType) => (
  <div className="message-box">
    <h3 className="message-box__title">
      {MESSAGE_BOX_DATA[messageBoxId].title}
    </h3>
    <p className="message-box__description">
      {MESSAGE_BOX_DATA[messageBoxId].description}
    </p>
  </div>
);
