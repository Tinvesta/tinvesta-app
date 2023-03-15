import { TextField } from '@mui/material';
import { Controller, FieldValues } from 'react-hook-form';

import { LocationAutocomplete } from '@ui';

import { ILocationAutocompleteWithControllerProps } from './location-autocomplete-with-controller.types';

export const LocationAutocompleteWithController = <TFieldValues extends FieldValues = FieldValues>({
  autocompleteProps,
  controllerProps,
  inputProps,
}: ILocationAutocompleteWithControllerProps<TFieldValues>): JSX.Element => (
  <Controller
    {...controllerProps}
    render={({ field, fieldState: { error, invalid } }) => (
      <LocationAutocomplete
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
        onChange={(_, newValue) => field.onChange(newValue)}
      />
    )}
  />
);
