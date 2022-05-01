import { GetServerSideProps } from 'next';

import { Settings } from '@domain';

import { hasOwnProperty } from '@utils';

import { DesktopDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';

export const SettingsPage = (): JSX.Element => (
  <DesktopDashboardLayout>
    <Settings />
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
