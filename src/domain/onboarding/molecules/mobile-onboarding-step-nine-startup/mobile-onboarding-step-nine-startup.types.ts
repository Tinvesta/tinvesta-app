import { IMobileOnboardingStepNineStartupData } from '../../onboarding.types';

export interface IMobileOnboardingStepNineStartupProps {
  defaultValues?: IMobileOnboardingStepNineStartupData;
  onContinueButtonClick: (data: IMobileOnboardingStepNineStartupData) => void;
}
