import { ISelectOption } from '@ui';

import { EInvestmentSize } from '@enums';

import { IInvestmentSize } from '@interfaces';

const getInvestmentSizeLabel = (name: EInvestmentSize, translations: Record<string, string>) => {
  const helperObject = {
    [EInvestmentSize.VERY_SMALL]: translations.commonInvestmentSizesVerySmall,
    [EInvestmentSize.SMALL]: translations.commonInvestmentSizesSmall,
    [EInvestmentSize.MEDIUM]: translations.commonInvestmentSizesMedium,
    [EInvestmentSize.LARGE]: translations.commonInvestmentSizesLarge,
    [EInvestmentSize.VERY_LARGE]: translations.commonInvestmentSizesVeryLarge,
  };

  return helperObject[name] || helperObject[EInvestmentSize.VERY_SMALL];
};

export const mapInvestmentSizesToDropdownOptions = (
  investmentSizes: IInvestmentSize[],
  translations: Record<string, string>,
): ISelectOption[] =>
  investmentSizes.map((_investmentSize) => ({
    value: _investmentSize.id,
    label: getInvestmentSizeLabel(_investmentSize.name, translations),
  }));
