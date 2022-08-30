import React, { useState } from "react";
import { Link } from "react-router-dom";
import { companyApi } from "../../redux/services/CompanyService";
import Long from "../../img/companyPage/Long.svg";
import Linked from "../../img/companyPage/Linked.svg";
import Rotation from "../../img/companyPage/Rotation.svg";
import Delete from "../../img/companyPage/Delete.svg";
import { AlertCard } from "../alertCard/AlertCard";
import { IPageHeaderProps } from "../../styled/IPageHeaderProps/IPageHeaderProps";
import "./PageHeader.scss";
import { ErrorBlock } from "../errorBlock/ErrorBlock";
import { LoadingBlock } from "../loadingBlock/LoadingBlock";
import { SuccessAlert } from "../successAlert/SuccessAlert";
import { ErrorAlert } from "../errorAlert/ErrorAlert";
import { CompanyInterface } from "../../redux/types/CompanyInterface";

export const PageHeader: React.FC<IPageHeaderProps> = ({ link, text }) => {
  const [alertActive, setAlertActive] = useState(false);
  const [showUpdateError, setShowUpdateError] = useState(false);
  const [showUpdateSuccess, setShowUpdateSuccess] = useState(false);

  const {
    data: company,
    error,
    isLoading,
    refetch,
  } = companyApi.useFetchCompanyQuery(12);
  const [deleteCompany, { isLoading: isDeleteLoading, error: isDeleteError }] =
    companyApi.useDeleteCompanyMutation();

  const onAlertClick = () => {
    setAlertActive(!alertActive);
  };

  const handleCloseUpdateError = () => setShowUpdateError(false);
  const handleShowUpdateError = () => setShowUpdateError(true);

  const handleCloseUpdateSuccess = () => setShowUpdateSuccess(false);
  const handleShowUpdateSuccess = () => setShowUpdateSuccess(true);

  const handleRemove = (company: CompanyInterface) => {
    deleteCompany(company)
      .unwrap()
      .then(() => handleShowUpdateSuccess())
      .catch(() => handleShowUpdateError());
  };

  const refetchCompany = () => {
    refetch();
  };

  return (
    <div className="head">
      <Link to={link}>
        <div className="head-link">
          <div className="head-link__arrow">
            <img src={Long} alt="Back_to_list" />
          </div>
          <div className="head-link__text">{text}</div>
        </div>
      </Link>

      <div className="head-icons">
        <div className="head-icons__btn">
          <button>
            <img src={Linked} alt="Copy_Link" />
          </button>
        </div>
        <div className="head-icons__btn" onClick={refetchCompany}>
          <button>
            <img src={Rotation} alt="Rotation" />{" "}
          </button>
        </div>
        <div className="head-icons__btn">
          <button onClick={onAlertClick}>
            <img src={Delete} alt="Delete" />
          </button>
          {(error || isDeleteError) && <ErrorBlock />}
          {(isLoading || isDeleteLoading) && <LoadingBlock />}
          {company && (
            <>
              <div>
                <AlertCard
                  alertActive={alertActive}
                  onAlertClick={onAlertClick}
                  remove={handleRemove}
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
            </>
          )}
        </div>
      </div>
    </div>
  );
};
