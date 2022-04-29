import { IMobileOnboardingStepNineInvestorData } from '../../onboarding.types';

export interface IMobileOnboardingStepNineInvestorProps {
  defaultValues?: IMobileOnboardingStepNineInvestorData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepNineInvestorData) => void;
}
