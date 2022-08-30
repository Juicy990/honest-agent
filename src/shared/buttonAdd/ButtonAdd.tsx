import React from "react";
import { IButtonAddProps } from "../../styled/IButtonAddProps/IButtonAddProps";
import Add from "../../img/companyPage/Add.svg";
import "./ButtonAdd.scss";

const ButtonAdd: React.FC<IButtonAddProps> = ({ onAddImage }) => {
  return (
    <div className="buttonAdd">
      <button>
        <div className="load">
          <input type="file" id="load" hidden onChange={onAddImage} />
          <label htmlFor="load">
            <img src={Add} alt="Add_image" />
            <span>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</span>
          </label>
        </div>
      </button>
    </div>
  );
};

export default ButtonAdd;
