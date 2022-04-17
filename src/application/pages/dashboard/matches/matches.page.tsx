import { GetServerSideProps } from 'next';

import { Matches } from '@domain';

import { hasOwnProperty } from '@utils';

import { DesktopDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';

export const MatchesPage = (): JSX.Element => (
  <DesktopDashboardLayout>
    <Matches />
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
