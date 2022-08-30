import { ContactInterface } from "../../redux/types/ContactInterface";

export interface IUpdateContactModalProps {
  contact: ContactInterface;
  // id: number;
  openModal: boolean;
  setOpenModal: (openModal: boolean) => void;
  onModalClick: () => void;
  updateContact: (contact: ContactInterface) => void;
}
