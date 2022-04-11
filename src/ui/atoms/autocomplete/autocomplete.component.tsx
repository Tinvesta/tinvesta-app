import { Autocomplete as MuiAutocomplete } from '@mui/material';
import { ForwardedRef, forwardRef, memo, useCallback } from 'react';

import { isNumber } from '@utils';

import { IAutocompleteProps } from './autocomplete.types';

const AutocompleteComponent = (
  { className, limit, options, value, ...restProps }: IAutocompleteProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => {
  const checkDisable = useCallback(
    () => isNumber(limit) && !!value && value.length >= limit,
    [value?.length],
  );

  // @ts-expect-error
  const optionValues = options.filter((_option) => value?.includes(_option.value));

  return (
    <MuiAutocomplete
      ref={ref}
      autoHighlight
      getOptionDisabled={checkDisable}
      getOptionLabel={(_option) => _option.label}
      isOptionEqualToValue={(_option, _value) => _option.value === _value.value}
      options={options}
      value={optionValues}
      {...restProps}
    />
  );
};

export const Autocomplete = memo(forwardRef(AutocompleteComponent));
