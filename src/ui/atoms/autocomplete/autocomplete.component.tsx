import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { ForwardedRef, forwardRef, memo, useCallback } from 'react';

import { isNumber } from '@utils';

import { IAutocompleteProps } from './autocomplete.types';

const AutocompleteComponent = (
  { className, limit, options, value, ...restProps }: IAutocompleteProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const checkDisable = useCallback(
    () => isNumber(limit) && !!value && value.length >= 5,
    [value?.length],
  );

  return (
    <MuiAutocomplete
      ref={ref}
      autoHighlight
      getOptionDisabled={checkDisable}
      getOptionLabel={(_option) => _option.label}
      isOptionEqualToValue={(_option, _value) => _option.value === _value.value}
      options={options}
      {...restProps}
    />
  );
};

export const Autocomplete = memo(forwardRef(AutocompleteComponent));
