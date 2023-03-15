import { TextField } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';

import { Autocomplete } from '@ui';

import { IAutocompleteWithControllerProps } from './autocomplete-with-controller.types';

export const AutocompleteWithController = <TFieldValues extends FieldValues = FieldValues>({
  autocompleteProps,
  controllerProps,
  inputProps,
}: IAutocompleteWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      // @ts-expect-error
      <Autocomplete
        {...autocompleteProps}
        {...field}
        id={field.name}
        renderInput={(params) => (
          <TextField
            error={invalid}
            helperText={error?.message || ' '}
            {...params}
            variant="outlined"
            {...inputProps}
          />
        )}
        value={field.value}
        onChange={(_, newValue) => field.onChange(newValue.map((_value) => _value.value))}
      />
    )}
  />
);
