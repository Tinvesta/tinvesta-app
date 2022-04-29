import { IFocusMarket, IInvestmentSize } from '@interfaces';

import { IMobileOnboardingStepSevenStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepSevenStartupProps {
  defaultValues?: IMobileOnboardingStepSevenStartupData;
  focusMarkets: IFocusMarket[];
  investmentSizes: IInvestmentSize[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepSevenStartupData) => void;
}
