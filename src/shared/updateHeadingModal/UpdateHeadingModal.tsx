import React, { useState } from "react";
import { IUpdateHeadingModalProps } from "../../styled/IUpdateHeadingModalProps/IUpdateHeadingModalProps";
import { ButtonConfirm } from "../buttonConfirm/ButtonConfirm";
import { TextInput } from "../texInput/TextInput";

export const UpdateHeadingModal: React.FC<IUpdateHeadingModalProps> = ({
  openModal,
  setOpenModal,
  onModalClick,
  updateName,
  company,
}) => {
  const [shortName, setName] = useState("");
  const [shortNameError, setShortNameError] = useState("");
  const [shortNameDirty, setShortNameDirty] = useState(false);

  const handleUpdateName = () => {
    if (shortName) {
      updateName({
        id: company.id,
        shortName,
      });
      setOpenModal(false);
      setName("");
    }
    setOpenModal(false);
    setName("");
  };

  const onChangeShortName = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setName(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      setShortNameError("");
    } else setShortNameError("введите не менее 2 символов");
  };

  const onShortNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === shortName) {
      setShortNameDirty(true);
    }
  };

  return (
    <div
      className={openModal ? "modal active" : "modal"}
      onClick={onModalClick}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">Редактировать краткое название</div>
        <div className="modal-input">
          <div className="modal-input__input">
            <TextInput
              id="название"
              valueInput={shortName}
              onChange={onChangeShortName}
              onBlur={onShortNameBlur}
            />
            {shortNameDirty && shortNameError && (
              <div className="warning-text">{shortNameError}</div>
            )}
          </div>
        </div>
      </div>

      <div className="modal-btn">
        <div>
          <ButtonConfirm text="ОТМЕНА" color="#b9b9b9" />
        </div>
        <div onClick={handleUpdateName}>
          <ButtonConfirm text="ГОТОВО" color="#82b284" />
        </div>
      </div>
    </div>
  );
};
