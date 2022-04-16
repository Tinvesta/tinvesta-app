import { GetServerSideProps } from 'next';

import { Dashboard } from '@domain';

import { isStartupProfile } from '@utils';

import { supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import S from './dashboard.styles';
import { IDashboardPageProps } from './dashboard.types';

export const DashboardPage = ({ startups }: IDashboardPageProps): JSX.Element => {
  console.log(startups);

  return (
    <S.StyledWrapper>
      <Dashboard />
    </S.StyledWrapper>
  );
};

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
        startups,
      },
    };
  }

  return {
    props: {},
  };
};
