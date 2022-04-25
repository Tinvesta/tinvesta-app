import { IMobileOnboardingStepTwoData } from '../../onboarding.types';

export interface IMobileOnboardingStepTwoProps {
  defaultValues?: IMobileOnboardingStepTwoData;
  onContinueButtonClick: (data: IMobileOnboardingStepTwoData) => void;
}
