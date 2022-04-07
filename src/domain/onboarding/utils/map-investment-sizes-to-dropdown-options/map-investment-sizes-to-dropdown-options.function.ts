import { ISelectOption } from '@ui';

import { IInvestmentSize } from '@interfaces';

export const mapInvestmentSizesToDropdownOptions = (
  investmentSizes: IInvestmentSize[],
): ISelectOption[] =>
  investmentSizes.map((_investmentSize) => ({
    label: _investmentSize.name,
    value: _investmentSize.id,
  }));
