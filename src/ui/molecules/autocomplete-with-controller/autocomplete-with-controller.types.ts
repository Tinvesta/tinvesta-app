import { TextFieldProps } from '@mui/material';
import { FieldValues, UseControllerProps } from 'react-hook-form';

import { IAutocompleteProps } from '@ui';

export interface IAutocompleteWithControllerProps<TFieldValues extends FieldValues = FieldValues> {
  autocompleteProps?: Omit<IAutocompleteProps, 'renderInput'>;
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render' | 'children'>;
  inputProps: TextFieldProps;
}
