import { ISelectOption } from '@ui';

import { IClientType } from '@interfaces';

export const mapClientTypesToDropdownOptions = (clientTypes: IClientType[]): ISelectOption[] =>
  clientTypes
    .map((_clientType) => ({
      label: _clientType.name,
      value: _clientType.id,
    }))
    .filter((_clientType) => _clientType.label !== 'all');
