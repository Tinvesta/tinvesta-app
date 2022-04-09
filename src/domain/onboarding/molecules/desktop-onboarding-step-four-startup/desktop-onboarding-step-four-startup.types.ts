import { IInvestmentSize, IInvestmentStageType } from '@interfaces';

import { IDesktopOnboardingStepFourStartupData } from '../../onboarding.types';

export interface IDesktopOnboardingStepFourStartupProps {
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  onContinueButtonClick: (data: IDesktopOnboardingStepFourStartupData) => void;
}
