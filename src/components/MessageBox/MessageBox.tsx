import * as React from "react";

import "./MessageBox.scss";

export type MessageBoxPropsType = {
  title: string;
  description: string;
};

export const MessageBox = ({ title, description }: MessageBoxPropsType) => (
  <div className="message-box">
    <h3 className="message-box__title">{title}</h3>
    <p className="message-box__description">{description}</p>
  </div>
);
