import { IInvestorDemandType } from '@interfaces';

import { IDesktopOnboardingStepFiveInvestorData } from '../../onboarding.types';

export interface IDesktopOnboardingStepFiveInvestorProps {
  investorDemandTypes: IInvestorDemandType[];
  onContinueButtonClick: (data: IDesktopOnboardingStepFiveInvestorData) => void;
}
