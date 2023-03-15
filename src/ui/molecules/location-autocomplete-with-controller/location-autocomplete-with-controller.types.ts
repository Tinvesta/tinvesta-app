import { TextFieldProps } from '@mui/material';
import { FieldValues, UseControllerProps } from 'react-hook-form';

import { ILocationAutocompleteProps } from '@ui';

export interface ILocationAutocompleteWithControllerProps<
  TFieldValues extends FieldValues = FieldValues,
> {
  autocompleteProps?: ILocationAutocompleteProps;
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render' | 'children'>;
  inputProps: TextFieldProps;
}
