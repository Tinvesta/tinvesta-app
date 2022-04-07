import { ISelectOption } from '@ui';

import { IInvestorProfileType } from '@interfaces';

export const mapInvestorProfileTypesToDropdownOptions = (
  investorProfileTypes: IInvestorProfileType[],
): ISelectOption[] =>
  investorProfileTypes.map((_investorProfileType) => ({
    label: _investorProfileType.name,
    value: _investorProfileType.id,
  }));
