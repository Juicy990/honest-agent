import { ReactNode } from "react";

export interface IDescriptionItemProps {
    name: string;
    value: string | number | ReactNode;
    color?: string;
  }