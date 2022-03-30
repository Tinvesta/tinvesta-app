import { MenuItem as MuiMenuItem, Select as MuiSelect } from '@mui/material';
import { ForwardedRef, forwardRef, memo } from 'react';

import { ISelectProps } from './select.types';

const SelectComponent = (
  { children, className, inputRef, options, ...restProps }: ISelectProps,
  ref: ForwardedRef<HTMLDivElement>,
): JSX.Element => (
  <MuiSelect inputRef={inputRef || ref} {...restProps}>
    {options.map((_option) => (
      <MuiMenuItem key={_option.key || _option.value} value={_option.value}>
        {_option.label}
      </MuiMenuItem>
    ))}
  </MuiSelect>
);

export const Dropdown = memo(forwardRef(SelectComponent));
