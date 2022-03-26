import { AutocompleteProps, ChipTypeMap } from '@mui/material';

export interface ILocationAutocompleteProps
  extends Omit<
    AutocompleteProps<string, false, false, false, ChipTypeMap['defaultComponent']>,
    'options' | 'renderInput'
  > {}
