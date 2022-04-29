import { IFocusMarket, IInvestorProfileType } from '@interfaces';

import { IMobileOnboardingStepFiveInvestorData } from '../../onboarding.types';

export interface IMobileOnboardingStepFiveInvestorProps {
  defaultValues?: IMobileOnboardingStepFiveInvestorData;
  focusMarkets: IFocusMarket[];
  investorProfileTypes: IInvestorProfileType[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepFiveInvestorData) => void;
}
