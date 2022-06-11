import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Likes } from '@domain';

import { Loading } from '@ui';

import { useDeviceDetect, useUser } from '@utils';

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
        description="Tinvesta is a matchmaking platform for start-ups and investors all over the world"
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
