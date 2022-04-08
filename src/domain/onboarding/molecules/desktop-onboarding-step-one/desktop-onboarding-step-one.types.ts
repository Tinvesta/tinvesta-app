import { IDesktopOnboardingBaseData } from '../../onboarding.types';

export interface IDesktopOnboardingStepOneProps {
  onContinueButtonClick: (data: IDesktopOnboardingBaseData) => void;
}
