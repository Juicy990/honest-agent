import { ContractInterface } from "./ContractInterface";
import { PhotoInterface } from "./PhotoInterface";

export interface CompanyInterface {
  id: number;
  contactId?: number;
  name?: string;
  shortName?: string;
  businessEntity?: string;
  contract?: ContractInterface;
  type?: string[];
  status?: string;
  createdAt?: string;
  updatedAt?: string;
  photos?: PhotoInterface[];
}
