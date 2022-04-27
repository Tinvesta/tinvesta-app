import { IFocusMarket, IInvestmentSize } from '@interfaces';

import { IMobileOnboardingStepSevenStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepSevenStartupProps {
  defaultValues?: IMobileOnboardingStepSevenStartupData;
  focusMarkets: IFocusMarket[];
  investmentSizes: IInvestmentSize[];
  onContinueButtonClick: (data: IMobileOnboardingStepSevenStartupData) => void;
}
