import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Onboarding } from '@domain';

import { Loading } from '@ui';

import { useUser } from '@utils';

import { ERoutes } from '@enums';

import { HealthCheckProvider } from '../../providers';
import { fetchDropdownsStaticData } from '../utils';
import S from './onboarding.styles';
import { IOnboardingPageProps } from './onboarding.types';

export const OnboardingPage = (props: IOnboardingPageProps): JSX.Element => {
  const router = useRouter();
  const { isLoading, user } = useUser();

  useEffect(() => {
    if (user === null && isLoading) {
      router.push(ERoutes.HOME);

      return;
    }

    if (user === null) {
      return;
    }

    if (!isLoading && user?.client_type_id) {
      router.push(ERoutes.DASHBOARD);
    }
  }, [user, isLoading]);

  const shouldRenderLoader = !user || isLoading || user?.client_type_id;

  return (
    <S.StyledWrapper>
      <Head>
        <title>Tinvesta</title>
      </Head>
      <HealthCheckProvider>
        {shouldRenderLoader ? <Loading /> : <Onboarding {...props} />}
      </HealthCheckProvider>
    </S.StyledWrapper>
  );
};

export const getStaticProps = async () => {
  const staticProps = await fetchDropdownsStaticData();

  return {
    props: staticProps,
  };
};
