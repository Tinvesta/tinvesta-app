import { AutocompleteProps } from '@mui/material';

export interface IAutocompleteOption {
  key?: string;
  label: string;
  value: string | number;
}

export interface IAutocompleteProps
  extends Omit<AutocompleteProps<IAutocompleteOption, true, false, false>, 'options'> {
  limit?: number;
  options: IAutocompleteOption[];
}
