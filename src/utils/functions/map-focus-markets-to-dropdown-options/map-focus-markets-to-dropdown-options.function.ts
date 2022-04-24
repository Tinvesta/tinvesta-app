import { ISelectOption } from '@ui';

import { EFocusMarket } from '@enums';

import { IFocusMarket } from '@interfaces';

const getFocusMarketLabel = (name: EFocusMarket, translations: Record<string, string>) => {
  const helperObject = {
    [EFocusMarket.B2B]: translations.commonFocusMarketsB2B,
    [EFocusMarket.B2C]: translations.commonFocusMarketsB2C,
  };

  return helperObject[name] || helperObject[EFocusMarket.B2B];
};

export const mapFocusMarketsToDropdownOptions = (
  focusMarkets: IFocusMarket[],
  translations: Record<string, string>,
): ISelectOption[] =>
  focusMarkets.map((_focusMarket) => ({
    value: _focusMarket.id,
    label: getFocusMarketLabel(_focusMarket.name, translations),
  }));
