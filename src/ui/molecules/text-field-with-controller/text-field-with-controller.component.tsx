import { TextField } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';

import { ITextFieldWithControllerProps } from './text-field-with-controller.types';

export const TextFieldWithController = <TFieldValues extends FieldValues = FieldValues>({
  controllerProps,
  inputProps,
}: ITextFieldWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <TextField
        {...inputProps}
        {...field}
        error={invalid}
        helperText={error?.message || ' '}
        id={field.name}
        value={field.value}
        onChange={(_event) => {
          const { value } = _event.target;

          if (inputProps?.type === 'number') {
            const parsedValue = +value;

            return field.onChange(value ? parsedValue : '');
          }

          field.onChange(value);
        }}
      />
    )}
  />
);
