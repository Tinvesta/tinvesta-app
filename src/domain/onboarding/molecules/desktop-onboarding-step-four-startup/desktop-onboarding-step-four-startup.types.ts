import { IInvestmentSize, IInvestmentStageType } from '@interfaces';

import { IDesktopOnboardingStepFourStartupData } from '../../onboarding.types';

export interface IDesktopOnboardingStepFourStartupProps {
  defaultValues?: IDesktopOnboardingStepFourStartupData;
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepFourStartupData) => void;
}
