import { MobileOnboardingStepTwo } from '../../molecules';
import { IMobileOnboardingProps } from './mobile-onboarding.types';

export const MobileOnboarding = ({
  clientTypes,
  teamSizes,
}: IMobileOnboardingProps): JSX.Element => {
  console.log(teamSizes);

  return <MobileOnboardingStepTwo clientTypes={clientTypes} onContinueButtonClick={console.log} />;
};
