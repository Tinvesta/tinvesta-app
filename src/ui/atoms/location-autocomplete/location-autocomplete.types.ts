import { AutocompleteProps } from '@mui/material';

export interface ILocationAutocompleteProps
  extends Omit<AutocompleteProps<string, false, false, false>, 'options'> {}
