import { GetServerSideProps } from 'next';

import { Registration } from '@domain';

import { supabaseInstance } from '@infrastructure';

import S from './registration.styles';

export const RegistrationPage = (): JSX.Element => (
  <S.StyledWrapper>
    <Registration />
  </S.StyledWrapper>
);

// @ts-expect-error
export const getServerSideProps = async ({ req }: GetServerSideProps) => {
  const { user } = await supabaseInstance.auth.api.getUserByCookie(req);

  console.log(user);

  if (!user) {
    return {
      redirect: {
        permanent: false,
        destination: '/home',
      },
      props: {},
    };
  }

  return {
    props: {},
  };
};
