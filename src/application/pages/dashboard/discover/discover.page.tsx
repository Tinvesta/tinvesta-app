import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Discover } from '@domain';

import { Loading } from '@ui';

import { useDeviceDetect, useUser } from '@utils';

import { ERoutes } from '@enums';

import { DesktopDashboardLayout, MobileDashboardLayout } from '../layouts';

export const DiscoverPage = (): JSX.Element => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const { deviceData } = useDeviceDetect();

  useEffect(() => {
    if (user === null && isLoading) {
      router.push(ERoutes.HOME);

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
      <Discover />
    </DashboardLayout>
  );
};
