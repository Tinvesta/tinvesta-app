import { ISelectOption } from '@ui';

import { IFocusMarket } from '@interfaces';

export const mapFocusMarketsToDropdownOptions = (focusMarkets: IFocusMarket[]): ISelectOption[] =>
  focusMarkets.map((_focusMarket) => ({
    label: _focusMarket.name,
    value: _focusMarket.id,
  }));
