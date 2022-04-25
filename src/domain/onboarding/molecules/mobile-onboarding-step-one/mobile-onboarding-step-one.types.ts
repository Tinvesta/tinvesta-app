import { IMobileOnboardingStepOneData } from '../../onboarding.types';

export interface IMobileOnboardingStepOneProps {
  defaultValues?: IMobileOnboardingStepOneData;
  onContinueButtonClick: (data: IMobileOnboardingStepOneData) => void;
}
