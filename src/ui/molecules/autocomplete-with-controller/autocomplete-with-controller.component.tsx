import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { Autocomplete } from '@ui';

import { IAutocompleteWithControllerProps } from './autocomplete-with-controller.types';

export const AutocompleteWithController = <TFieldValues,>({
  autocompleteProps,
  controllerProps,
  inputProps,
}: IAutocompleteWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
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
        // @ts-expect-error
        value={field.value}
        onChange={(_, newValue) => field.onChange(newValue.map((_value) => _value.value))}
      />
    )}
  />
);
