import { GetServerSideProps } from 'next';

import { Discover } from '@domain';

import { convertObjectKeysToCamelCase, hasOwnProperty, isStartupProfile } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { DesktopDashboardLayout } from '../layouts';
import { verifyUserAccess } from '../utils';
import { IDiscoverPageProps } from './discover.types';

export const DiscoverPage = ({ startups }: IDiscoverPageProps): JSX.Element => {
  console.log(startups);

  return (
    <DesktopDashboardLayout>
      <Discover />
    </DesktopDashboardLayout>
  );
};

export const getServerSideProps = async (serverSideProps: GetServerSideProps) => {
  const result = await verifyUserAccess(serverSideProps);

  if (!hasOwnProperty(result, 'profileData') || !hasOwnProperty(result, 'user')) {
    return result;
  }

  const { profileData, user } = result;

  // TODO - add similar check for startup client_type_id
  if (!isStartupProfile(profileData.client_type_id)) {
    const { data: startups } = await supabaseInstance.rpc('get_startups', {
      profile_id_input: user?.id,
    });

    return {
      props: {
        startups: startups?.map(convertObjectKeysToCamelCase) || [],
      },
    };
  }

  return {
    props: {},
  };
};
