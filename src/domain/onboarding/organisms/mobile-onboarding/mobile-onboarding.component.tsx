import { MobileOnboardingStepFour } from '../../molecules';
import { IMobileOnboardingProps } from './mobile-onboarding.types';

export const MobileOnboarding = ({ teamSizes }: IMobileOnboardingProps): JSX.Element => {
  console.log(teamSizes);

  return <MobileOnboardingStepFour onContinueButtonClick={console.log} />;
};
