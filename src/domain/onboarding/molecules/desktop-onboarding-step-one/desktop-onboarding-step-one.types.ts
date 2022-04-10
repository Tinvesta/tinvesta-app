import { IDesktopOnboardingStepOneData } from '../../onboarding.types';

export interface IDesktopOnboardingStepOneProps {
  defaultValues?: IDesktopOnboardingStepOneData;
  onContinueButtonClick: (data: IDesktopOnboardingStepOneData) => void;
}
