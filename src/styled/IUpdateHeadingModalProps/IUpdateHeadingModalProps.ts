import { CompanyInterface } from "../../redux/types/CompanyInterface";

export interface IUpdateHeadingModalProps {
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  onModalClick: () => void;
  updateName: (company: CompanyInterface) => void;
  company: CompanyInterface;
}
