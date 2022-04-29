import { IMobileOnboardingStepOneData } from '../../onboarding.types';

export interface IMobileOnboardingStepOneProps {
  defaultValues?: IMobileOnboardingStepOneData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IMobileOnboardingStepOneData) => void;
}
