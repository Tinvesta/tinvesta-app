import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDeviceDetect } from 'use-device-detect';

import { Likes } from '@domain';

import { Loading } from '@ui';

import { useUser } from '@utils';

import { ERoutes } from '@enums';

import { fetchDropdownsStaticData } from '../../utils';
import { DesktopDashboardLayout, MobileDashboardLayout } from '../layouts';
import { ILikesProps } from './likes.types';

export const LikesPage = (props: ILikesProps): JSX.Element => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const { deviceData } = useDeviceDetect();

  useEffect(() => {
    if (user === null && isLoading) {
      router.push(ERoutes.HOME);

      return;
    }

    if (user === null) {
      return;
    }

    if (!isLoading && !user?.client_type_id) {
      router.push(ERoutes.ONBOARDING);
    }
  }, [user, isLoading]);

  const shouldRenderLoader = !user || isLoading || !user?.client_type_id;

  if (shouldRenderLoader) {
    return <Loading />;
  }

  const DashboardLayout = deviceData.isSmallerThanLG
    ? MobileDashboardLayout
    : DesktopDashboardLayout;

  return (
    <DashboardLayout>
      <NextSeo
        noindex
        defaultTitle="Tinvesta"
        description="Tinvesta is a matchmaking platform for startups and investors all over the world. The app enables investors and startups to find each other in the easiest way: create a profile - swipe - match."
        title="Tinvesta | Likes"
      />
      <Likes clientTypeId={user.client_type_id as number} {...props} />
    </DashboardLayout>
  );
};

export const getStaticProps = async () => {
  const staticProps = await fetchDropdownsStaticData();

  return {
    props: staticProps,
  };
};
