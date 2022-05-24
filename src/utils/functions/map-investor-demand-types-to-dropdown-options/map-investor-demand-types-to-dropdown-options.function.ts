import { ISelectOption } from '@ui';

import { compareObjectsByValue } from '@utils';

import { EInvestorDemandType } from '@enums';

import { IInvestorDemandType } from '@interfaces';

const getInvestorDemandTypeLabel = (
  name: EInvestorDemandType,
  translations: Record<string, string>,
) => {
  const helperObject = {
    [EInvestorDemandType.TALENT]: translations.commonInvestorDemandTypesTalent,
    [EInvestorDemandType.LOCATION]: translations.commonInvestorDemandTypesLocation,
    [EInvestorDemandType.CO_FOUNDER]: translations.commonInvestorDemandTypesCoFounder,
    [EInvestorDemandType.TECHNOLOGY]: translations.commonInvestorDemandTypesTechnology,
    [EInvestorDemandType.MONEY_FOR_SHARES]: translations.commonInvestorDemandTypesMoneyForShares,
    [EInvestorDemandType.NETWORK_AND_SUPPORT]:
      translations.commonInvestorDemandTypesNetworkAndSupport,
    [EInvestorDemandType.DEBT_CAPITAL_WITHOUT_SHARES]:
      translations.commonInvestorDemandTypesDebtCapitalWithoutShares,
  };

  return helperObject[name] || helperObject[EInvestorDemandType.CO_FOUNDER];
};

export const mapInvestorDemandTypesToDropdownOptions = (
  investorDemandTypes: IInvestorDemandType[],
  translations: Record<string, string>,
): ISelectOption[] =>
  investorDemandTypes
    .map((_investorDemandType) => ({
      value: _investorDemandType.id,
      label: getInvestorDemandTypeLabel(_investorDemandType.name, translations),
    }))
    .sort(compareObjectsByValue('label'));
