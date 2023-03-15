import { FormControl, FormHelperText, InputLabel } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';

import { Select } from '@ui';

import { ISelectWithControllerProps } from './select-with-controller.types';

export const SelectWithController = <TFieldValues extends FieldValues = FieldValues>({
  controllerProps,
  formControlProps = {},
  selectProps,
}: ISelectWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <FormControl variant="outlined" {...formControlProps} error={invalid}>
        {selectProps.label && selectProps.labelId && (
          <InputLabel color={selectProps.color} id={selectProps.labelId}>
            {selectProps.label}
          </InputLabel>
        )}
        <Select {...selectProps} {...field} id={field.name} value={field.value} />
        <FormHelperText>{error?.message || ' '}</FormHelperText>
      </FormControl>
    )}
  />
);
