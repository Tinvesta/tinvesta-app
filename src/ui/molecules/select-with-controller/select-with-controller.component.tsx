import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller } from 'react-hook-form';

import { Select } from '@ui';

import { ISelectWithControllerProps } from './select-with-controller.types';

export const SelectWithController = <TFieldValues,>({
  selectProps,
  controllerProps,
  formControlProps = {},
}: ISelectWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <FormControl variant="outlined" {...formControlProps} error={invalid}>
        {selectProps.label && selectProps.labelId && (
          <InputLabel id={selectProps.labelId}>{selectProps.label}</InputLabel>
        )}
        <Select {...selectProps} {...field} id={field.name} value={field.value} />
        <FormHelperText>{error?.message || ' '}</FormHelperText>
      </FormControl>
    )}
  />
);
