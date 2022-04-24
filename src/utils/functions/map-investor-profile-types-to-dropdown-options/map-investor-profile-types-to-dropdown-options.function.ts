import { ISelectOption } from '@ui';

import { EInvestorProfileType } from '@enums';

import { IInvestorProfileType } from '@interfaces';

const getInvestorProfileTypeLabel = (
  name: EInvestorProfileType,
  translations: Record<string, string>,
) => {
  const helperObject = {
    [EInvestorProfileType.PRIVATE]: translations.commonInvestorProfileTypesPrivate,
    [EInvestorProfileType.CORPORATE]: translations.commonInvestorProfileTypesCorporate,
    [EInvestorProfileType.INSTITUTIONAL]: translations.commonInvestorProfileTypesInstitutional,
  };

  return helperObject[name] || helperObject[EInvestorProfileType.PRIVATE];
};

export const mapInvestorProfileTypesToDropdownOptions = (
  investorProfileTypes: IInvestorProfileType[],
  translations: Record<string, string>,
): ISelectOption[] =>
  investorProfileTypes.map((_investorProfileType) => ({
    value: _investorProfileType.id,
    label: getInvestorProfileTypeLabel(_investorProfileType.name, translations),
  }));
