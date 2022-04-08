import { IDesktopOnboardingStepOneData } from '../../onboarding.types';

export interface IDesktopOnboardingStepOneProps {
  onContinueButtonClick: (data: IDesktopOnboardingStepOneData) => void;
}
