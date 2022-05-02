import { useDeviceDetect } from '@utils';

import { DesktopProfile, MobileProfile } from './organisms';
import { IProfileProps } from './profile.types';

export const Profile = (props: IProfileProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const ProfileComponent = deviceData.isSmallerThanLG ? MobileProfile : DesktopProfile;

  return <ProfileComponent {...props} />;
};
