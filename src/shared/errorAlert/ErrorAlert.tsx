import React from "react";
import { ButtonConfirm } from "../buttonConfirm/ButtonConfirm";
export interface IErrorAlertProps {
  showUpdateError: boolean;
  handleCloseUpdateError: () => void;
}

export const ErrorAlert: React.FC<IErrorAlertProps> = ({
  showUpdateError,
  handleCloseUpdateError,
}) => {
  return (
    <div
      className={showUpdateError ? "alert active" : "alert"}
      onClick={handleCloseUpdateError}
    >
      <div className="alert-content" onClick={(e) => e.stopPropagation()}>
        Ошибка. Запрос не выполнен.
      </div>

      <div className="alert-btn" onClick={handleCloseUpdateError}>
        <ButtonConfirm text="ЗАКРЫТЬ" color="#82b284" />
      </div>
    </div>
  );
};
