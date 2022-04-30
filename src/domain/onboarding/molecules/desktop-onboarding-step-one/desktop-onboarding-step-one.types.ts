import { IDesktopOnboardingStepOneData } from '../../onboarding.types';

export interface IDesktopOnboardingStepOneProps {
  defaultValues?: IDesktopOnboardingStepOneData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepOneData) => void;
}
