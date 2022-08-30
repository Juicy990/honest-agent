import { CompanyInterface } from "../../redux/types/CompanyInterface";

export interface IAlertCardProps {
  alertActive: boolean;
  onAlertClick: () => void;
  company: CompanyInterface;
  remove: (company: CompanyInterface) => void;
}
