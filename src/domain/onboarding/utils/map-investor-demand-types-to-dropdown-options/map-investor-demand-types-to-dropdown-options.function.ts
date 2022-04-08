import { ISelectOption } from '@ui';

import { IInvestorDemandType } from '@interfaces';

export const mapInvestorDemandTypesToDropdownOptions = (
  investorDemandTypes: IInvestorDemandType[],
): ISelectOption[] =>
  investorDemandTypes.map((_investorDemandType) => ({
    label: _investorDemandType.name,
    value: _investorDemandType.id,
  }));
