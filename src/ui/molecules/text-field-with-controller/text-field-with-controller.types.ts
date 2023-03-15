import { TextFieldProps } from '@mui/material';
import { FieldValues, UseControllerProps } from 'react-hook-form';

export interface ITextFieldWithControllerProps<TFieldValues extends FieldValues = FieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  inputProps?: TextFieldProps;
}
