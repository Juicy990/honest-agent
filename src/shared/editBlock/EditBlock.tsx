import React from "react";
import { IEditBlockProps } from "../../styled/IEditBlockProps/IEditPageProps";
import Edit from "../../img/companyPage/Edit.svg";
import "./EditBlock.scss";

export const EditBlock: React.FC<IEditBlockProps> = ({ onModalClick }) => {
  return (
    <div className="edit" onClick={onModalClick}>
      <img src={Edit} alt="Edit" />
    </div>
  );
};
