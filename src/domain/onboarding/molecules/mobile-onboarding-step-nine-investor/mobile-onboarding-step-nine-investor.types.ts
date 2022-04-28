import { IMobileOnboardingStepNineInvestorData } from '../../onboarding.types';

export interface IMobileOnboardingStepNineInvestorProps {
  defaultValues?: IMobileOnboardingStepNineInvestorData;
  onContinueButtonClick: (data: IMobileOnboardingStepNineInvestorData) => void;
}
