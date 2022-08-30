import React, { useState } from "react";
import { companyApi } from "../../redux/services/CompanyService";
import "./CompanyBlock.scss";
import { TitleItem } from "../titleItem/TitleItem";
import { DescriptionItem } from "../descriptionItem/DescriptionItem";
import { UpdateCompanyModal } from "../updateCompanyModal/UpdateCompanyModal";
import { ErrorBlock } from "../errorBlock/ErrorBlock";
import { LoadingBlock } from "../loadingBlock/LoadingBlock";
import { SuccessAlert } from "../successAlert/SuccessAlert";
import { ErrorAlert } from "../errorAlert/ErrorAlert";
import { CompanyInterface } from "../../redux/types/CompanyInterface";
import { EditBlock } from "../editBlock/EditBlock";

export const CompanyBlock: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [showUpdateError, setShowUpdateError] = useState(false);
  const [showUpdateSuccess, setShowUpdateSuccess] = useState(false);

  const {
    data: company,
    error,
    isLoading,
  } = companyApi.useFetchCompanyQuery(12);

  const [updateCompany, { isLoading: isUpdateLoading }] =
    companyApi.useUpdateCompanyMutation();

  const onModalClick = () => {
    setOpenModal(!openModal);
  };

  const handleCloseUpdateError = () => setShowUpdateError(false);
  const handleShowUpdateError = () => setShowUpdateError(true);

  const handleCloseUpdateSuccess = () => setShowUpdateSuccess(false);
  const handleShowUpdateSuccess = () => setShowUpdateSuccess(true);

  const handleUpdate = (company: CompanyInterface) => {
    updateCompany(company)
      .unwrap()
      .then(() => handleShowUpdateSuccess())
      .catch(() => handleShowUpdateError());
  };

  return (
    <div className="block">
      {error && <ErrorBlock />}
      {(isLoading || isUpdateLoading) && <LoadingBlock />}
      {company && (
        <>
          <div>
            <UpdateCompanyModal
              openModal={openModal}
              setOpenModal={setOpenModal}
              onModalClick={onModalClick}
              updateCompany={handleUpdate}
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
          <div className="block-title">
            <TitleItem title="общая информация" />
            <EditBlock onModalClick={onModalClick} />
          </div>

          <div className="block-description">
            <DescriptionItem name="Полное название" value={company.name} />
            <DescriptionItem
              name="Договор"
              value={
                <>
                  <span>{company.contract?.no}</span>
                  <span>&#160;от&#160;</span>
                  {company.contract && (
                    <span>
                      {new Date(
                        company.contract.issue_date
                      ).toLocaleDateString()}
                    </span>
                  )}
                </>
              }
            />
            <DescriptionItem name="Форма" value={company.businessEntity} />
            <DescriptionItem name="Тип" value={company.type?.join(", ")} />
          </div>
        </>
      )}
    </div>
  );
};
