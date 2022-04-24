import { ISelectOption } from '@ui';

import { EStartupProfileCreatorType } from '@enums';

import { IStartupProfileCreatorType } from '@interfaces';

const getStartupProfileCreatorTypeLabel = (
  name: EStartupProfileCreatorType,
  translations: Record<string, string>,
) => {
  const helperObject = {
    [EStartupProfileCreatorType.FOUNDER]: translations.commonStartupProfileCreatorTypesFounder,
    [EStartupProfileCreatorType.EMPLOYEE]: translations.commonStartupProfileCreatorTypesEmployee,
    [EStartupProfileCreatorType.CO_FOUNDER]: translations.commonStartupProfileCreatorTypesCoFounder,
  };

  return helperObject[name] || helperObject[EStartupProfileCreatorType.CO_FOUNDER];
};

export const mapStartupProfileCreatorTypesToDropdownOptions = (
  startupProfileCreatorTypes: IStartupProfileCreatorType[],
  translations: Record<string, string>,
): ISelectOption[] =>
  startupProfileCreatorTypes.map((_startupProfileCreatorType) => ({
    value: _startupProfileCreatorType.id,
    label: getStartupProfileCreatorTypeLabel(_startupProfileCreatorType.name, translations),
  }));
