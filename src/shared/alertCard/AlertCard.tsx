import React from "react";
import { IAlertCardProps } from "../../styled/IAlertCardProps/IAlertCardProps";
import { ButtonConfirm } from "../buttonConfirm/ButtonConfirm";

import "./AlertCard.scss";

export const AlertCard: React.FC<IAlertCardProps> = ({
  alertActive,
  onAlertClick,
  remove,
  company,
}) => {
  const handleRemove = () => {
    remove(company);
  };

  return (
    <div
      className={alertActive ? "card active" : "card"}
      onClick={onAlertClick}
    >
      <div className="card-content" onClick={(e) => e.stopPropagation()}>
        <div className="card-content__title">Удалить карточку</div>
        <div className="card-content__text">
          Отправить карточку организации в архив?
        </div>
      </div>

      <div className="card-btn">
        <div>
          <ButtonConfirm text="ОТМЕНА" color="#b9b9b9" />
        </div>
        <div onClick={handleRemove}>
          <ButtonConfirm text="УДАЛИТЬ" color="#82b284" />
        </div>
      </div>
    </div>
  );
};
