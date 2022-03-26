import { Autocomplete, TextField } from '@mui/material';
import { ForwardedRef, forwardRef, memo, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { locationsByNameAction } from './api';
import { ILocationAutocompleteProps } from './location-autocomplete.types';

const LocationAutocompleteComponent = (
  { inputValue, ...restProps }: ILocationAutocompleteProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  const [options, setOptions] = useState<string[]>([]);
  const {
    data: locationsByNameData,
    isLoading: islocationsByNameLoading,
    mutate: locationsByNameMutation,
  } = useMutation(locationsByNameAction);

  useEffect(() => {
    if (!inputValue) {
      return;
    }

    locationsByNameMutation(inputValue);
  }, [inputValue]);

  useEffect(() => {
    if (locationsByNameData?.data) {
      const newOptions =
        locationsByNameData?.data?.features?.map((_feature) => _feature.place_name) || [];

      setOptions(newOptions);
    }
  }, [locationsByNameData?.data, islocationsByNameLoading]);

  return (
    <Autocomplete
      ref={ref}
      {...restProps}
      disablePortal
      filterOptions={(options) => options}
      inputValue={inputValue}
      loading={islocationsByNameLoading}
      loadingText="Loading..."
      openOnFocus={false}
      options={options}
      renderInput={(params) => <TextField {...params} label="Location" />}
    />
  );
};

export const LocationAutocomplete = memo(forwardRef(LocationAutocompleteComponent));
