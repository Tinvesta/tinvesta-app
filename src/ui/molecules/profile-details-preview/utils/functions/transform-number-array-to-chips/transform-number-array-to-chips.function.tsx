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

  return recordNumberArray.map((_value) => {
    const chipLabel = dropdownOptions.find((_option) => _option.value === _value)?.label;

    if (!chipLabel) {
      return null;
    }

    const isInRecordArray = userNumberArray?.includes(_value);

    return (
      <Chip
        key={chipLabel as string}
        label={chipLabel}
        size={chipSize}
        variant={isInRecordArray ? 'filled' : 'outlined'}
      />
    );
  });
};
