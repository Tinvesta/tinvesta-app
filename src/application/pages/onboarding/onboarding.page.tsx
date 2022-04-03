import { GetServerSideProps } from 'next';

import { Onboarding } from '@domain';

import { supabaseInstance } from '@infrastructure';

import { ERoutes } from '@enums';

import S from './onboarding.styles';

export const OnboardingPage = (): JSX.Element => (
  <S.StyledWrapper>
    <Onboarding />
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

  return {
    props: {},
  };
};
