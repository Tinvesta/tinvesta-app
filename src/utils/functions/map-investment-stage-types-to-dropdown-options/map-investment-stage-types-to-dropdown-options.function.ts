import { ISelectOption } from '@ui';

import { EInvestmentStageType } from '@enums';

import { IInvestmentStageType } from '@interfaces';

const getInvestmentStageTypeLabel = (
  name: EInvestmentStageType,
  translations: Record<string, string>,
) => {
  const helperObject = {
    [EInvestmentStageType.IDEA]: translations.commonInvestmentStageTypesIdea,
    [EInvestmentStageType.SEED]: translations.commonInvestmentStageTypesSeed,
    [EInvestmentStageType.GROWTH]: translations.commonInvestmentStageTypesGrowth,
    [EInvestmentStageType.SERIES_A]: translations.commonInvestmentStageTypesSeriesA,
    [EInvestmentStageType.SERIES_B]: translations.commonInvestmentStageTypesSeriesB,
  };

  return helperObject[name] || helperObject[EInvestmentStageType.GROWTH];
};

export const mapInvestmentStageTypesToDropdownOptions = (
  investmentStageTypes: IInvestmentStageType[],
  translations: Record<string, string>,
): ISelectOption[] =>
  investmentStageTypes.map((_investmentStageType) => ({
    value: _investmentStageType.id,
    label: getInvestmentStageTypeLabel(_investmentStageType.name, translations),
  }));
