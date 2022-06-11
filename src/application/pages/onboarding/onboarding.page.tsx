import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Onboarding } from '@domain';

import { Loading } from '@ui';

import { useUser } from '@utils';

import { ERoutes } from '@enums';

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
      <NextSeo
        noindex
        defaultTitle="Tinvesta"
        description="Tinvesta is a matchmaking platform for startups and investors all over the world. The app enables investors and startups to find each other in the easiest way: create a profile - swipe - match."
        title="Tinvesta | Onboarding"
      />
      {shouldRenderLoader ? <Loading /> : <Onboarding {...props} />}
    </S.StyledWrapper>
  );
};

export const getStaticProps = async () => {
  const staticProps = await fetchDropdownsStaticData();

  return {
    props: staticProps,
  };
};
