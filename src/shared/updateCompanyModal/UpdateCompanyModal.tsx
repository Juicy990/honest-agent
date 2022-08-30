import React, { useState } from "react";
import { trueDate } from "../../helpers/constants/RegConstants";
import { ButtonConfirm } from "../buttonConfirm/ButtonConfirm";
import { TextInput } from "../texInput/TextInput";
import { SelectInput } from "../selectInput/SelectInput";
import { IOptionsProps } from "../../styled/ISelectInputProps/ISelectInputProps";
import { IUpdateCompanyModalProps } from "../../styled/IUpdateCompanyModalProps/IUpdateCompanyModalProps";

export const UpdateCompanyModal: React.FC<IUpdateCompanyModalProps> = ({
  openModal,
  setOpenModal,
  onModalClick,
  updateCompany,
  company,
}) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [nameDirty, setNameDirty] = useState(false);

  const [no, setNo] = useState("");
  const [noError, setNoError] = useState("");
  const [noDirty, setNoDirty] = useState(false);

  const [date, setDate] = useState("");
  const [dateError, setDateError] = useState("");
  const [dateDirty, setDateDirty] = useState(false);

  const [businessEntity, setbusinessEntity] = useState("");
  const [businessEntityDirty, setbusinessEntityDirty] = useState(false);
  const [businessEntityError, setbusinessEntityError] = useState("");

  const [selectedType, setSelectedType] = useState<IOptionsProps | null>(null);

  const options: IOptionsProps[] = [
    { label: "агент, подрядчик", value: "agent,contractor" },
  ];

  const handleUpdateCompany = () => {
    const issue_date = new Date(date);
    const contract = { no, issue_date };
    const type = selectedType?.value.split(",");
    updateCompany({
      id: company.id,
      name,
      businessEntity,
      contract,
      type,
    });
    setOpenModal(false);
    setName("");
    setNo("");
    setDate("");
    setbusinessEntity("");
    setSelectedType(null);
  };

  const onChangeName = (event: React.FormEvent<HTMLInputElement>): void => {
    setName(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      setNameError("");
    } else setNameError("введите не менее 2 символов");
  };

  const onChangeNo = (event: React.FormEvent<HTMLInputElement>): void => {
    setNo(event.currentTarget.value);
    if (+event.currentTarget.value && event.currentTarget.value.length > 0) {
      setNoError("");
    } else setNoError("введите не менее 1 цифры");
  };

  const onChangeDate = (event: React.FormEvent<HTMLInputElement>) => {
    setDate(event.currentTarget.value);
    if (trueDate.test(String(event.currentTarget.value).toLowerCase())) {
      setDateError("");
    } else setDateError("введите дату в формате гггг-мм-дд");
  };

  const onChangeBusinessEntity = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setbusinessEntity(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      setbusinessEntityError("");
    } else setbusinessEntityError("введите не менее 2 символов");
  };

  const onSelectType = (selection: IOptionsProps) => {
    setSelectedType(selection);
  };

  const onNameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === name) {
      setNameDirty(true);
    }
  };

  const onNoBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === no) {
      setNoDirty(true);
    }
  };

  const onDateBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === date) {
      setDateDirty(true);
    }
  };

  const onbusinessEntityBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === businessEntity) {
      setbusinessEntityDirty(true);
    }
  };

  return (
    <div
      className={openModal ? "modal active" : "modal"}
      onClick={onModalClick}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">Редактировать общую информацию</div>
        <div className="modal-input">
          <div className="modal-input__input">
            <TextInput
              id="полное название"
              valueInput={name}
              onChange={onChangeName}
              onBlur={onNameBlur}
            />
            {nameDirty && nameError && (
              <div className="warning-text">{nameError}</div>
            )}
          </div>
          <div className="modal-input__input">
            <TextInput
              id="договор №"
              valueInput={no}
              onChange={onChangeNo}
              onBlur={onNoBlur}
            />
            {noDirty && noError && (
              <div className="warning-text">{noError}</div>
            )}
          </div>
          <div className="modal-input__input">
            <TextInput
              id="договор от"
              valueInput={date}
              onChange={onChangeDate}
              onBlur={onDateBlur}
            />
            {dateDirty && dateError && (
              <div className="warning-text">{dateError}</div>
            )}
          </div>
          <div className="modal-input__input">
            <TextInput
              id="форма"
              valueInput={businessEntity}
              onChange={onChangeBusinessEntity}
              onBlur={onbusinessEntityBlur}
            />
            {businessEntityDirty && businessEntityError && (
              <div className="warning-text">{businessEntityError}</div>
            )}
          </div>
          <div className="modal-input__select">
            <SelectInput
              placeholder="Тип"
              selected={selectedType}
              options={options}
              onChange={onSelectType}
            />
          </div>
        </div>
      </div>

      <div className="modal-btn">
        <div>
          <ButtonConfirm text="ОТМЕНА" color="#b9b9b9" />
        </div>
        <div onClick={handleUpdateCompany}>
          <ButtonConfirm text="ГОТОВО" color="#82b284" />
        </div>
      </div>
    </div>
  );
};
