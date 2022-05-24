import { ISelectOption } from '@ui';

import { compareObjectsByValue } from '@utils';

import { EStartupSector } from '@enums';

import { IStartupSector } from '@interfaces';

const getStartupSectorLabel = (name: EStartupSector, translations: Record<string, string>) => {
  const helperObject = {
    [EStartupSector.PHYSICAL_PRODUCT]: translations.commonStartupSectorsPhysicalProduct,
    [EStartupSector.SERVICE_INDUSTRY]: translations.commonStartupSectorsServiceIndustry,
    [EStartupSector.SOFTWARE]: translations.commonStartupSectorsSoftware,
  };

  return helperObject[name] || helperObject[EStartupSector.PHYSICAL_PRODUCT];
};

export const mapStartupSectorsToDropdownOptions = (
  startupSectors: IStartupSector[],
  translations: Record<string, string>,
): ISelectOption[] =>
  startupSectors
    .map((_startupSector) => ({
      value: _startupSector.id,
      label: getStartupSectorLabel(_startupSector.name, translations),
    }))
    .sort(compareObjectsByValue('label'));
