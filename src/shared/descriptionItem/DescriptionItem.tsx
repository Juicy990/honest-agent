import React from "react";
import { IDescriptionItemProps } from "../../styled/IDescriptionItemProps/IDescriptionItemProps";
import "./DescriptionItem.scss";

export const DescriptionItem: React.FC<IDescriptionItemProps> = ({
  name,
  value,
  color,
}) => {
  return (
    <div className="description-item">
      <div className="description-item__name">{name}:</div>
      <div className="description-item__value" style={{ color: color }}>
        {value}
      </div>
    </div>
  );
};
