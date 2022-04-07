import { ISelectOption } from '@ui';

import { IInvestmentStageType } from '@interfaces';

export const mapInvestmentStageTypestoDropdownOptions = (
  investmentStageTypes: IInvestmentStageType[],
): ISelectOption[] =>
  investmentStageTypes.map((_investmentStageType) => ({
    label: _investmentStageType.name,
    value: _investmentStageType.id,
  }));
