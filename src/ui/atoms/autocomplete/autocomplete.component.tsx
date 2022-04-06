import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { ForwardedRef, forwardRef, memo } from 'react';

import { IAutocompleteProps } from './autocomplete.types';

const AutocompleteComponent = (
  { className, options, value, ...restProps }: IAutocompleteProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => (
  <MuiAutocomplete
    ref={ref}
    autoHighlight
    getOptionLabel={(option) => option.label}
    options={options}
    {...restProps}
  />
);

export const Autocomplete = memo(forwardRef(AutocompleteComponent));
