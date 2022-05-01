import { GetServerSideProps } from 'next';

import { Discover } from '@domain';

import { hasOwnProperty, useDeviceDetect } from '@utils';

import { DesktopDashboardLayout, MobileDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';

export const DiscoverPage = (): JSX.Element => {
  const { deviceData } = useDeviceDetect();

  const DashboardLayout = deviceData.isSmallerThanLG
    ? MobileDashboardLayout
    : DesktopDashboardLayout;

  return (
    <DashboardLayout>
      <Discover />
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
