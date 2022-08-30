import React from "react";
import Remove from "../../img/companyPage/Remove.svg";
import { IImageItemProps } from "../../styled/IImageItemProps/IImageItemProps";
import "./ImageItem.scss";

export const ImageItem: React.FC<IImageItemProps> = ({
  thumbpath,
  name,
  date,
  onRemove,
}) => {
  return (
    <div className="image">
      <div className="image-file">
        <img
          className="image-file__icon"
          src={Remove}
          alt="Remove"
          onClick={onRemove}
        />
        <img
          className="image-file__loaded"
          src={`${thumbpath}`}
          alt="imageloaded"
        />
      </div>
      <div className="image-name">{name}</div>
      <div className="image-date">{date}</div>
    </div>
  );
};
