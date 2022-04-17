import { GetServerSideProps } from 'next';

import { Likes } from '@domain';

import { hasOwnProperty } from '@utils';

import { DesktopDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';

export const LikesPage = (): JSX.Element => (
  <DesktopDashboardLayout>
    <Likes />
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
