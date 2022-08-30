export interface ITextInputProps {
    autoFocus?: boolean;
    inputActive?: boolean;
    id?: string;
    valueInput?: string | number | string[];
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  }