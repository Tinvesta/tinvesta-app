import { GetServerSideProps } from 'next';

import { Profile } from '@domain';

import { hasOwnProperty, useDeviceDetect } from '@utils';

import { DesktopDashboardLayout, MobileDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';

export const ProfilePage = (): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const DashboardLayout = deviceData.isSmallerThanLG
    ? MobileDashboardLayout
    : DesktopDashboardLayout;

  return (
    <DashboardLayout>
      <Profile />
    </DashboardLayout>
  );
};

export const getServerSideProps = async (serverSideProps: GetServerSideProps) => {
  const result = await verifyUserAccess(serverSideProps);

  if (!hasOwnProperty(result, 'profileData') || !hasOwnProperty(result, 'user')) {
    return result;
  }

  return {
    props: {},
  };
};
