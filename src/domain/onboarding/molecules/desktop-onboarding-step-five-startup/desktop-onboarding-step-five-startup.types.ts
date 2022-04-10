import { IDesktopOnboardingStepFiveStartupData } from '../../onboarding.types';

export interface IDesktopOnboardingStepFiveStartupProps {
  defaultValues?: IDesktopOnboardingStepFiveStartupData;
  onBackButtonClick: () => void;
  onContinueButtonClick: (data: IDesktopOnboardingStepFiveStartupData) => void;
}
