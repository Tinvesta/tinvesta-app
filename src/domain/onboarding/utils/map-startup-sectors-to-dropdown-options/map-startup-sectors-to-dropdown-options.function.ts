import { ISelectOption } from '@ui';

import { IStartupSector } from '@interfaces';

export const mapStartupSectorsToDropdownOptions = (
  startupSectors: IStartupSector[],
): ISelectOption[] =>
  startupSectors.map((_startupSector) => ({
    label: _startupSector.name,
    value: _startupSector.id,
  }));
