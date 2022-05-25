import { Chip } from '@mui/material';

import { ISelectOption } from '@ui';

import { isArray } from '@utils';

export const transformNumberArrayToChips = (
  userNumberArray: number[] | undefined,
  recordNumberArray: number[] | undefined,
  dropdownOptions: ISelectOption[],
  chipSize: 'small' | 'medium',
) => {
  if (!isArray(userNumberArray) || !isArray(recordNumberArray)) {
    return [];
  }

  return recordNumberArray.reduce<JSX.Element[]>((_accumulator, _value) => {
    if (userNumberArray?.includes(_value)) {
      const chipLabel = dropdownOptions.find((_option) => _option.value === _value)?.label;

      if (!chipLabel) {
        return _accumulator;
      }

      return [
        ..._accumulator,
        <Chip key={chipLabel as string} label={chipLabel} size={chipSize} variant="filled" />,
      ];
    }

    return _accumulator;
  }, []);
};
