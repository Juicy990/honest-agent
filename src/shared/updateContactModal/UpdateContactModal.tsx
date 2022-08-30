import React, { useState } from "react";
import { IUpdateContactModalProps } from "../../styled/IUpdateContactModalProps/IUpdateContactModalProps";
import { trueMail, truePhone } from "../../helpers/constants/RegConstants";
import { ButtonConfirm } from "../buttonConfirm/ButtonConfirm";
import { TextInput } from "../texInput/TextInput";
import "./UpdateContactModal.scss";

export const UpdateContactModal: React.FC<IUpdateContactModalProps> = ({
  openModal,
  setOpenModal,
  onModalClick,
  updateContact,
  contact,
}) => {
  const [lastname, setLastname] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [lastnameDirty, setLastnameDirty] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [firstnameError, setFirstnameError] = useState("");
  const [firstnameDirty, setFirstnameDirty] = useState(false);

  const [patronymic, setPatronymic] = useState("");
  const [patronymicError, setPatronymicError] = useState("");
  const [patronymicDirty, setPatronymicDirty] = useState(false);

  const [phone, setPhone] = useState<number | string>("");
  const [phoneDirty, setPhoneDirty] = useState(false);
  const [phoneError, setPhoneError] = useState("");

  const [email, setEmail] = useState("");
  const [emailDirty, setEmailDirty] = useState(false);
  const [emailError, setEmailError] = useState("");

  const handleUpdateContact = () => {
    updateContact({
      id: contact.id,
      lastname,
      firstname,
      patronymic,
      phone,
      email,
    });
    setOpenModal(false);
    setLastname("");
    setFirstname("");
    setPatronymic("");
    setPhone("");
    setEmail("");
  };

  const onChangeLastName = (event: React.FormEvent<HTMLInputElement>): void => {
    setLastname(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      setLastnameError("");
    } else setLastnameError("введите не менее 2 символов");
  };

  const onChangeFirstName = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setFirstname(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      setFirstnameError("");
    } else setFirstnameError("введите имя из 2 символов");
  };

  const onChangePatronymic = (
    event: React.FormEvent<HTMLInputElement>
  ): void => {
    setPatronymic(event.currentTarget.value);
    if (event.currentTarget.value.length > 1) {
      setPatronymicError("");
    } else setPatronymicError("введите не менее 2 символов");
  };

  const onChangePhone = (event: React.FormEvent<HTMLInputElement>): void => {
    setPhone(event.currentTarget.value);
    if (truePhone.test(String(event.currentTarget.value).toLowerCase())) {
      setPhoneError("");
    } else setPhoneError("введите 11-значный номер");
  };

  const onChangeEmail = (event: React.FormEvent<HTMLInputElement>): void => {
    setEmail(event.currentTarget.value);
    if (trueMail.test(String(event.currentTarget.value).toLowerCase())) {
      setEmailError("");
    } else setEmailError("некорректный email");
  };

  const onLastnameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === lastname) {
      setLastnameDirty(true);
    }
  };

  const onFirstnameBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === firstname) {
      setFirstnameDirty(true);
    }
  };

  const onPatronymicBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === patronymic) {
      setPatronymicDirty(true);
    }
  };

  const onPhoneBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === phone) {
      setPhoneDirty(true);
    }
  };

  const onEmailBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (e.target.name === email) {
      setEmailDirty(true);
    }
  };

  return (
    <div
      className={openModal ? "modal active" : "modal"}
      onClick={onModalClick}
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-title">Редактировать контактные данные</div>
        <div className="modal-input">
          <div className="modal-input__input">
            <TextInput
              id="фамилия"
              valueInput={lastname}
              onChange={onChangeLastName}
              onBlur={onLastnameBlur}
            />
            {lastnameDirty && lastnameError && (
              <div className="warning-text">{lastnameError}</div>
            )}
          </div>
          <div className="modal-input__input">
            <TextInput
              id="имя"
              valueInput={firstname}
              onChange={onChangeFirstName}
              onBlur={onFirstnameBlur}
            />
            {firstnameDirty && firstnameError && (
              <div className="warning-text">{firstnameError}</div>
            )}
          </div>
          <div className="modal-input__input">
            <TextInput
              id="отчество"
              valueInput={patronymic}
              onChange={onChangePatronymic}
              onBlur={onPatronymicBlur}
            />
            {patronymicDirty && patronymicError && (
              <div className="warning-text">{patronymicError}</div>
            )}
          </div>
          <div className="modal-input__input">
            <TextInput
              id="телефон"
              valueInput={phone}
              onChange={onChangePhone}
              onBlur={onPhoneBlur}
            />
            {phoneDirty && phoneError && (
              <div className="warning-text">{phoneError}</div>
            )}
          </div>
          <div className="modal-input__input">
            <TextInput
              id="email"
              valueInput={email}
              onChange={onChangeEmail}
              onBlur={onEmailBlur}
            />
            {emailDirty && emailError && (
              <div className="warning-text">{emailError}</div>
            )}
          </div>
        </div>
      </div>

      <div className="modal-btn">
        <div>
          <ButtonConfirm text="ОТМЕНА" color="#b9b9b9" />
        </div>
        <div onClick={handleUpdateContact}>
          <ButtonConfirm text="ГОТОВО" color="#82b284" />
        </div>
      </div>
    </div>
  );
};
