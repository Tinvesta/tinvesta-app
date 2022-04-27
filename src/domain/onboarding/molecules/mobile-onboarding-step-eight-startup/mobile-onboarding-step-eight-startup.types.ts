import { IInvestmentStageType } from '@interfaces';

import { IMobileOnboardingStepEightStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepEightStartupProps {
  defaultValues?: IMobileOnboardingStepEightStartupData;
  investmentStageTypes: IInvestmentStageType[];
  onContinueButtonClick: (data: IMobileOnboardingStepEightStartupData) => void;
}
