import { CompanyInterface } from "../../redux/types/CompanyInterface";

export interface IUpdateCompanyModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  onModalClick: () => void;
  updateCompany: (company: CompanyInterface) => void;
  company: CompanyInterface;
}
