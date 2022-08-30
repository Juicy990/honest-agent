import React from "react";
import { IButtonConfirmProps } from "../../styled/IButtonConfirmProps/IButtonConfirmProps";

import "./ButtonConfirm.scss";

export const ButtonConfirm: React.FC<IButtonConfirmProps> = ({
  text,
  color,
}) => {
  return (
    <div className="button-confirm">
      <button type="submit" style={{ color: color }}>
        {text}
      </button>
    </div>
  );
};
