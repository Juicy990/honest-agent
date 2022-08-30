import React from "react";
import { ITextInputProps } from "../../styled/ITextInputProps/ITextInputProps";
import "./TextInput.scss";

export const TextInput: React.FC<ITextInputProps> = ({
  id,
  valueInput,
  onBlur,
  onChange,
}) => {
  return (
    <div className="input">
      <input
        type="text"
        id={id}
        value={valueInput}
        placeholder=" "
        onChange={onChange}
        onBlur={onBlur}
        autoFocus
      />
      <label htmlFor={id}>{id}</label>
    </div>
  );
};
