import { IFocusMarket, IInvestorProfileType } from '@interfaces';

import { IMobileOnboardingStepFiveInvestorData } from '../../onboarding.types';

export interface IMobileOnboardingStepFiveInvestorProps {
  defaultValues?: IMobileOnboardingStepFiveInvestorData;
  focusMarkets: IFocusMarket[];
  investorProfileTypes: IInvestorProfileType[];
  onContinueButtonClick: (data: IMobileOnboardingStepFiveInvestorData) => void;
}
