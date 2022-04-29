import { IMobileOnboardingStepNineStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepNineStartupProps {
  defaultValues?: IMobileOnboardingStepNineStartupData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepNineStartupData) => void;
}
