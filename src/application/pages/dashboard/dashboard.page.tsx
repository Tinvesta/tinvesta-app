import { GetServerSideProps } from 'next';

import { Dashboard } from '@domain';

import { supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import S from './dashboard.styles';

export const DashboardPage = (): JSX.Element => (
  <S.StyledWrapper>
    <Dashboard />
  </S.StyledWrapper>
);

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

  return {
    props: {},
  };
};
