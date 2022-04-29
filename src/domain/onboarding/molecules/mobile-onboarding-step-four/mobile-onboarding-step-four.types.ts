import { IMobileOnboardingStepFourData } from '../../onboarding.types';

export interface IMobileOnboardingStepFourProps {
  defaultValues?: IMobileOnboardingStepFourData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepFourData) => void;
}
