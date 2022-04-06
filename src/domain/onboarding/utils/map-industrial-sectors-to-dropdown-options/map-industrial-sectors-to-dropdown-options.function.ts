import { IAutocompleteOption } from '@ui';

import { IIndustrialSector } from '@interfaces';

export const mapIndustrialSectorsToDropdownOptions = (
  industrialSectors: IIndustrialSector[],
): IAutocompleteOption[] =>
  industrialSectors.map((_industrialSector) => ({
    label: _industrialSector.name,
    value: _industrialSector.id,
  }));
