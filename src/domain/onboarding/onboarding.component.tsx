import { useDeviceDetect } from '@utils';

import { IOnboardingProps } from './onboarding.types';
import { DesktopOnboarding, MobileOnboarding } from './organisms';

export const Onboarding = (props: IOnboardingProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const OnboardingComponent = deviceData.isSmallerThanLG ? MobileOnboarding : DesktopOnboarding;

  return <OnboardingComponent {...props} />;
};
