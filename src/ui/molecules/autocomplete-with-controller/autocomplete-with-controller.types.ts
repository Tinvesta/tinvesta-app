import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

import { IAutocompleteProps } from '@ui';

export interface IAutocompleteWithControllerProps<TFieldValues> {
  autocompleteProps?: Omit<IAutocompleteProps, 'renderInput'>;
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render' | 'children'>;
  inputProps: TextFieldProps;
}
