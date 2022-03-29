import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

export interface ITextFieldWithControllerProps<TFieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  inputProps?: TextFieldProps;
}
