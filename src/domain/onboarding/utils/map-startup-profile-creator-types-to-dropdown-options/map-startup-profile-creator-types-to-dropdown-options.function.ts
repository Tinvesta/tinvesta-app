import { ISelectOption } from '@ui';

import { IStartupProfileCreatorType } from '@interfaces';

export const mapStartupProfileCreatorTypesToDropdownOptions = (
  startupProfileCreatorTypes: IStartupProfileCreatorType[],
): ISelectOption[] =>
  startupProfileCreatorTypes.map((_startupProfileCreatorType) => ({
    label: _startupProfileCreatorType.name,
    value: _startupProfileCreatorType.id,
  }));
