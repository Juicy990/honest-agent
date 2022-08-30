import React from "react";
import { ButtonConfirm } from "../buttonConfirm/ButtonConfirm";

import "./SuccessAlert.scss";

export interface ISuccessAlertProps {
  showUpdateSuccess: boolean;
  handleCloseUpdateSuccess: () => void;
}

export const SuccessAlert: React.FC<ISuccessAlertProps> = ({
  showUpdateSuccess,
  handleCloseUpdateSuccess,
}) => {
  return (
    <div
      className={showUpdateSuccess ? "alert active" : "alert"}
      onClick={handleCloseUpdateSuccess}
    >
      <div className="alert-content" onClick={(e) => e.stopPropagation()}>
        Запрос выполнен успешно
      </div>

      <div className="alert-btn" onClick={handleCloseUpdateSuccess}>
        <ButtonConfirm text="ЗАКРЫТЬ" color="#82b284" />
      </div>
    </div>
  );
};
