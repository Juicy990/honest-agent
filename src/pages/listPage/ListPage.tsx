import axios from "axios";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { companyApi } from "../../redux/services/CompanyService";
import { ErrorBlock } from "../../shared/errorBlock/ErrorBlock";
import { LoadingBlock } from "../../shared/loadingBlock/LoadingBlock";
import { PageHeader } from "../../shared/pageHeader/PageHeader";

import "./ListPage.scss";

export const ListPage: React.FC = () => {
  const {
    data: company,
    error,
    isLoading,
  } = companyApi.useFetchCompanyQuery(12);

  return (
    <div className="container">
      <div className="header">
        <PageHeader link="/" text="назад на главную" />
      </div>
      {error && <ErrorBlock />}
      {isLoading && <LoadingBlock />}
      <div className="item">
        <Link to={`/companies/${company?.id}`}>
          <div className="item__name">{company?.name}</div>
        </Link>
      </div>
    </div>
  );
};
