import { GetServerSideProps } from 'next';

import { Profile } from '@domain';

import { hasOwnProperty } from '@utils';

import { DesktopDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';

export const ProfilePage = (): JSX.Element => (
  <DesktopDashboardLayout>
    <Profile />
  </DesktopDashboardLayout>
);

export const getServerSideProps = async (serverSideProps: GetServerSideProps) => {
  const result = await verifyUserAccess(serverSideProps);

  if (!hasOwnProperty(result, 'profileData') || !hasOwnProperty(result, 'user')) {
    return result;
  }

  return {
    props: {},
  };
};