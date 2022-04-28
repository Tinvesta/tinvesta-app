import { IInvestmentSize, IInvestmentStageType } from '@interfaces';

import { IMobileOnboardingStepSevenInvestorData } from '../../onboarding.types';

export interface IMobileOnboardingStepSevenInvestorProps {
  defaultValues?: IMobileOnboardingStepSevenInvestorData;
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  onContinueButtonClick: (data: IMobileOnboardingStepSevenInvestorData) => void;
}
