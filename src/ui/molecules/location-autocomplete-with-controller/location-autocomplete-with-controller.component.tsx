import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

import { LocationAutocomplete } from '@ui';

import { ILocationAutocompleteWithControllerProps } from './location-autocomplete-with-controller.types';

export const LocationAutocompleteWithController = <TFieldValues,>({
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
        // @ts-expect-error
        value={field.value}
        onChange={(_, newValue) => field.onChange(newValue)}
      />
    )}
  />
);
