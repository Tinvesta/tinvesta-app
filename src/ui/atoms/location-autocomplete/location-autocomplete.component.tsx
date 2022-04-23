import { Autocomplete } from '@mui/material';
import { ForwardedRef, forwardRef, memo, useEffect, useState } from 'react';
import { useMutation } from 'react-query';

import { useTranslation } from '@utils';

import { locationsByNameAction } from './api';
import { translationStrings } from './location-autocomplete.defaults';
import { ILocationAutocompleteProps } from './location-autocomplete.types';

const LocationAutocompleteComponent = (
  props: ILocationAutocompleteProps,
  ref: ForwardedRef<HTMLInputElement>,
): JSX.Element => {
  const {
    data: locationsByNameData,
    isLoading: islocationsByNameLoading,
    mutate: locationsByNameMutation,
  } = useMutation(locationsByNameAction);

  const [options, setOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const translations = useTranslation(translationStrings);

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
      disablePortal
      filterOptions={(options) => options}
      inputValue={inputValue}
      loading={islocationsByNameLoading}
      loadingText={translations.componentLocationAutocompleteLoadingText}
      noOptionsText={translations.componentLocationAutocompleteNoOptionsText}
      openOnFocus={false}
      options={options}
      onInputChange={(_, newValue) => setInputValue(newValue)}
      {...props}
    />
  );
};

export const LocationAutocomplete = memo(forwardRef(LocationAutocompleteComponent));
