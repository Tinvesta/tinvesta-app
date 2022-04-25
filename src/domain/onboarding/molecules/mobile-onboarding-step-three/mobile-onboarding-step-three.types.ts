import { IMobileOnboardingStepThreeData } from '../../onboarding.types';

export interface IMobileOnboardingStepThreeProps {
  defaultValues?: IMobileOnboardingStepThreeData;
  onContinueButtonClick: (data: IMobileOnboardingStepThreeData) => void;
}
