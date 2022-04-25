import { IMobileOnboardingStepFourData } from '../../onboarding.types';

export interface IMobileOnboardingStepFourProps {
  defaultValues?: IMobileOnboardingStepFourData;
  onContinueButtonClick: (data: IMobileOnboardingStepFourData) => void;
}
