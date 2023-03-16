import useLocalStorage from 'beautiful-react-hooks/useLocalStorage';
import { useDeviceDetect } from 'use-device-detect';

import { USER_REF_LOCAL_STORAGE_KEY } from '@constants';

import { IOnboardingProps } from './onboarding.types';
import { DesktopOnboarding, MobileOnboarding } from './organisms';

export const Onboarding = (props: IOnboardingProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const [userRefLocalStorage] = useLocalStorage<string>(USER_REF_LOCAL_STORAGE_KEY, '');

  const OnboardingComponent = deviceData.isSmallerThanLG ? MobileOnboarding : DesktopOnboarding;

  return <OnboardingComponent {...props} userRef={userRefLocalStorage || undefined} />;
};
