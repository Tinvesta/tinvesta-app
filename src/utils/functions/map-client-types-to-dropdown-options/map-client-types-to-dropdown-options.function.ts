import { ISelectOption } from '@ui';

import { EClientType } from '@enums';

import { IClientType } from '@interfaces';

const getClientTypeLabel = (name: EClientType, translations: Record<string, string>) => {
  const helperObject = {
    [EClientType.STARTUP]: translations.commonClientTypesStartup,
    [EClientType.INVESTOR]: translations.commonClientTypesInvestor,
  };

  return helperObject[name] || helperObject[EClientType.STARTUP];
};

export const mapClientTypesToDropdownOptions = (
  clientTypes: IClientType[],
  translations: Record<string, string>,
): ISelectOption[] =>
  clientTypes.map((_clientType) => ({
    value: _clientType.id,
    label: getClientTypeLabel(_clientType.name, translations),
  }));
