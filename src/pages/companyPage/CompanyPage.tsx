import React from "react";
import { CompanyBlock } from "../../shared/companyBlock/CompanyBlock";
import { HeadingBlock } from "../../shared/headingBlock/HeadingBlock";
import { ContactsBlock } from "../../shared/contactsBlock/ContactsBlock";
import { ImageBlock } from "../../shared/imageBlock/ImageBlock";
import { PageHeader } from "../../shared/pageHeader/PageHeader";
import "./CompanyPage.scss";

export const CompanyPage: React.FC = () => {
  return (
    <div className="container">
      <div className="header">
        <PageHeader link="/companies" text="к списку организаций" />
      </div>
      <div className="body">
        <div className="content">
          <div className="content__heading">
            <HeadingBlock />
          </div>
          <div className="content__item">
            <CompanyBlock />
          </div>
        </div>

        <div className="content">
          <div className="content__block">
            <ContactsBlock />
          </div>
        </div>
        <div className="content">
          <div className="content__block">
            <ImageBlock />
          </div>
        </div>
      </div>
    </div>
  );
};
