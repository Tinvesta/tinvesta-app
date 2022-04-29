import { IMobileOnboardingStepThreeData } from '../../onboarding.types';

export interface IMobileOnboardingStepThreeProps {
  defaultValues?: IMobileOnboardingStepThreeData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepThreeData) => void;
}
