import React from "react";
import { ITitleItemProps } from "../../styled/ITitleItemProps/ITitleItemProps";
import "./TitleItem.scss";

export const TitleItem: React.FC<ITitleItemProps> = ({ title }) => {
  return (
    <div className="title">
      <div className="title__title">{title}</div>
      <div className="edit"></div>
    </div>
  );
};
