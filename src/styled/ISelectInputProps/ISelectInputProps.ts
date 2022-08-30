export interface IOptionsProps {
    label: string;
    value: string;
}
  
export interface ISelectInputProps {
    placeholder: string;
    options: IOptionsProps[];
    selected: IOptionsProps | null;
    onChange: (selection: IOptionsProps) => void
}