import { GetServerSideProps } from 'next';

import { Discover } from '@domain';

import { convertObjectKeysToCamelCase, isStartupProfile } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import { DesktopDashboardLayout } from '../layouts';
import { IDiscoverPageProps } from './discover.types';

export const DiscoverPage = ({ startups }: IDiscoverPageProps): JSX.Element => {
  console.log(startups);

  return <Discover />;
};

DiscoverPage.Layout = DesktopDashboardLayout;

// @ts-expect-error
export const getServerSideProps = async ({ req }: GetServerSideProps) => {
  const { user } = await supabaseInstance.auth.api.getUserByCookie(req);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: ERoutes.HOME,
      },
      props: {},
    };
  }

  const { data: profileData } = await supabaseInstance
    .from('profiles')
    .select('client_type_id')
    .eq('id', user.id)
    .single();

  if (!profileData.client_type_id) {
    return {
      redirect: {
        permanent: false,
        destination: ERoutes.ONBOARDING,
      },
      props: {},
    };
  }

  // TODO - add similar check for startup client_type_id
  if (!isStartupProfile(profileData.client_type_id)) {
    const { data: startups } = await supabaseInstance.rpc('get_startups', {
      profile_id_input: user.id,
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
