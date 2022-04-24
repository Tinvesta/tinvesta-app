import { ISelectOption } from '@ui';

import { ETeamSize } from '@enums';

import { ITeamSize } from '@interfaces';

const getTeamSizeLabel = (name: ETeamSize, translations: Record<string, string>) => {
  const helperObject = {
    [ETeamSize.VERY_SMALL]: translations.commonTeamSizesVerySmall,
    [ETeamSize.SMALL]: translations.commonTeamSizesSmall,
    [ETeamSize.MEDIUM]: translations.commonTeamSizesMedium,
    [ETeamSize.LARGE]: translations.commonTeamSizesLarge,
  };

  return helperObject[name] || helperObject[ETeamSize.VERY_SMALL];
};

export const mapTeamSizesToDropdownOptions = (
  teamSizes: ITeamSize[],
  translations: Record<string, string>,
): ISelectOption[] =>
  teamSizes.map((_teamSize) => ({
    value: _teamSize.id,
    label: getTeamSizeLabel(_teamSize.name, translations),
  }));
