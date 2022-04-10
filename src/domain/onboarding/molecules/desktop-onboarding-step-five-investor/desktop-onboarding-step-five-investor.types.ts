import { IInvestorDemandType } from '@interfaces';

import { IDesktopOnboardingStepFiveInvestorData } from '../../onboarding.types';

export interface IDesktopOnboardingStepFiveInvestorProps {
  defaultValues?: IDesktopOnboardingStepFiveInvestorData;
  investorDemandTypes: IInvestorDemandType[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepFiveInvestorData) => void;
}
