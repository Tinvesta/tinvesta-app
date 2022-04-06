import { ISelectOption } from '@ui';

import { ITeamSize } from '@interfaces';

export const mapTeamSizesToDropdownOptions = (teamSizes: ITeamSize[]): ISelectOption[] =>
  teamSizes.map((_teamSize) => ({
    label: _teamSize.name,
    value: _teamSize.id,
  }));
