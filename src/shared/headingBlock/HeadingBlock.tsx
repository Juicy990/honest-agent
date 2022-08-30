import React, { useState } from "react";
import "./HeadingBlock.scss";
import { companyApi } from "../../redux/services/CompanyService";
import { UpdateHeadingModal } from "../updateHeadingModal/UpdateHeadingModal";
import { EditBlock } from "../editBlock/EditBlock";
import { ErrorBlock } from "../errorBlock/ErrorBlock";
import { LoadingBlock } from "../loadingBlock/LoadingBlock";
import { SuccessAlert } from "../successAlert/SuccessAlert";
import { ErrorAlert } from "../errorAlert/ErrorAlert";
import { CompanyInterface } from "../../redux/types/CompanyInterface";

export const HeadingBlock: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showUpdateError, setShowUpdateError] = useState(false);
  const [showUpdateSuccess, setShowUpdateSuccess] = useState(false);

  const {
    data: company,
    error,
    isLoading,
  } = companyApi.useFetchCompanyQuery(12);
  const [updateName, { isLoading: isUpdateLoading, error: updateError }] =
    companyApi.useUpdateCompanyMutation();

  const onModalClick = () => {
    setOpenModal(!openModal);
  };

  const handleCloseUpdateError = () => setShowUpdateError(false);
  const handleShowUpdateError = () => setShowUpdateError(true);

  const handleCloseUpdateSuccess = () => setShowUpdateSuccess(false);
  const handleShowUpdateSuccess = () => setShowUpdateSuccess(true);

  const handleUpdate = (company: CompanyInterface) => {
    updateName(company)
      .unwrap()
      .then(() => handleShowUpdateSuccess())
      .catch(() => handleShowUpdateError());
  };
  return (
    <>
      {(error || updateError) && <ErrorBlock />}
      {(isLoading || isUpdateLoading) && <LoadingBlock />}
      {company && (
        <div className="heading">
          <div className="heading-modal">
            <UpdateHeadingModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              onModalClick={onModalClick}
              updateName={handleUpdate}
              company={company}
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
          <div className="heading-title">
            <div className="heading-title__heading">{company.shortName}</div>
            <div className="heading-title__edit">
              <EditBlock onModalClick={onModalClick} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};
