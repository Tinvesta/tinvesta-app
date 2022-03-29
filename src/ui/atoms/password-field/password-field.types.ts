import { TextFieldProps } from '@mui/material';

export interface IPasswordFieldValidator {
  isValid: (value: unknown) => boolean;
  message: string;
}

export type TPasswordFieldProps = TextFieldProps & {
  validators?: IPasswordFieldValidator[];
};
