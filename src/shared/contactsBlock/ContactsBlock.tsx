import React, { useState } from "react";
import { contactApi } from "../../redux/services/ContactService";
import "./ContactsBlock.scss";
import { TitleItem } from "../titleItem/TitleItem";
import { DescriptionItem } from "../descriptionItem/DescriptionItem";
import { UpdateContactModal } from "../updateContactModal/UpdateContactModal";
import { ErrorBlock } from "../errorBlock/ErrorBlock";
import { LoadingBlock } from "../loadingBlock/LoadingBlock";
import { SuccessAlert } from "../successAlert/SuccessAlert";
import { ErrorAlert } from "../errorAlert/ErrorAlert";
import { ContactInterface } from "../../redux/types/ContactInterface";
import { EditBlock } from "../editBlock/EditBlock";

export const ContactsBlock: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showUpdateError, setShowUpdateError] = useState(false);
  const [showUpdateSuccess, setShowUpdateSuccess] = useState(false);

  const {
    data: contact,
    error,
    isLoading,
  } = contactApi.useFetchContactQuery(16);

  const [updateContact, { isLoading: isUpdateLoading }] =
    contactApi.useUpdateContactMutation();

  const onModalClick = () => {
    setOpenModal(!openModal);
  };

  const handleCloseUpdateError = () => setShowUpdateError(false);
  const handleShowUpdateError = () => setShowUpdateError(true);

  const handleCloseUpdateSuccess = () => setShowUpdateSuccess(false);
  const handleShowUpdateSuccess = () => setShowUpdateSuccess(true);

  const handleUpdate = (contact: ContactInterface) => {
    updateContact(contact)
      .unwrap()
      .then(() => handleShowUpdateSuccess())
      .catch(() => handleShowUpdateError());
  };

  return (
    <div className="block">
      {error && <ErrorBlock />}
      {(isLoading || isUpdateLoading) && <LoadingBlock />}
      {contact && (
        <>
          <div>
            <UpdateContactModal
              setOpenModal={setOpenModal}
              openModal={openModal}
              onModalClick={onModalClick}
              updateContact={handleUpdate}
              contact={contact}
            />
          </div>
          <div>
            <SuccessAlert
              showUpdateSuccess={showUpdateSuccess}
              handleCloseUpdateSuccess={handleCloseUpdateSuccess}
            />
          </div>
          <div>
            <ErrorAlert
              showUpdateError={showUpdateError}
              handleCloseUpdateError={handleCloseUpdateError}
            />
          </div>
          <div className="block-title">
            <TitleItem title="КОНТАКТНЫЕ ДАННЫЕ" />
            <EditBlock onModalClick={onModalClick} />
          </div>
          <div className="block-description">
            <DescriptionItem
              name="ФИО"
              value={
                <>
                  <span>{contact?.lastname} &#160;</span>
                  <span>{contact?.firstname} &#160;</span>
                  <span>{contact?.patronymic}</span>
                </>
              }
            />
            <DescriptionItem
              name="Телефон"
              value={
                <>
                  <span>+</span>
                  <span>{contact?.phone}</span>
                </>
              }
            />
            <DescriptionItem
              name="Эл. почта"
              value={contact?.email}
              color="#82b284"
            />
          </div>
        </>
      )}
    </div>
  );
};
