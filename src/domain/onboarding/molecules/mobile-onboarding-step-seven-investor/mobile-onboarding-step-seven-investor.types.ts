import { IInvestmentSize, IInvestmentStageType } from '@interfaces';

import { IMobileOnboardingStepSevenInvestorData } from '../../onboarding.types';

export interface IMobileOnboardingStepSevenInvestorProps {
  defaultValues?: IMobileOnboardingStepSevenInvestorData;
  investmentSizes: IInvestmentSize[];
  investmentStageTypes: IInvestmentStageType[];
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepSevenInvestorData) => void;
}
