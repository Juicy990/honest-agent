import React, { useState } from "react";
import { ISelectInputProps } from "../../styled/ISelectInputProps/ISelectInputProps";
import "./SelectInput.scss";

export const SelectInput: React.FC<ISelectInputProps> = ({
  placeholder,
  options,
  onChange,
  selected,
}) => {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <>
      <div className="select" onClick={() => setShowOptions(!showOptions)}>
        <span>{selected ? selected.label : placeholder}</span>
        <span>&#9660;</span>
      </div>
      {showOptions && (
        <div className="options">
          {options.map((option) => (
            <div
              onClick={() => {
                onChange(option);
                setShowOptions(false);
              }}
              key={option.value}
              className="options-item"
            >
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
