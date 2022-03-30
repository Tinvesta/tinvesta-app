import { TextFieldProps } from '@mui/material';
import { UseControllerProps } from 'react-hook-form';

import { ILocationAutocompleteProps } from '@ui';

export interface ILocationAutocompleteWithControllerProps<TFieldValues> {
  autocompleteProps?: ILocationAutocompleteProps;
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render' | 'children'>;
  inputProps: TextFieldProps;
}
