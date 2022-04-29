import { IInvestmentStageType } from '@interfaces';

import { IMobileOnboardingStepEightStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepEightStartupProps {
  defaultValues?: IMobileOnboardingStepEightStartupData;
  investmentStageTypes: IInvestmentStageType[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepEightStartupData) => void;
}
