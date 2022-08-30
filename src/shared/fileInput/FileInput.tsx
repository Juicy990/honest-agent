import React from "react";
import "./FileInput.scss";
import Add from "../../img/itemPage/Add.svg";
import { IFileInputProps } from "../../styled/IFileInputProps/IFileInputProps";

export const FileInput: React.FC<IFileInputProps> = ({ onChange }) => {
  return (
    <div className="load">
      <input
        type="file"
        id="load"
        hidden
        // onChange={handleUpload}
      />
      <label htmlFor="load">
        <img src={Add} alt="Add_image" />
        <span>ДОБАВИТЬ ИЗОБРАЖЕНИЕ</span>
      </label>
    </div>
  );
};
