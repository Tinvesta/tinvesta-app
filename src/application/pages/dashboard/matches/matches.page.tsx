import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { Matches } from '@domain';

import { Loader } from '@ui';

import { useDeviceDetect, useUser } from '@utils';

import { ERoutes } from '@enums';

import { DesktopDashboardLayout, MobileDashboardLayout } from '../layouts';

export const MatchesPage = (): JSX.Element => {
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

  const DashboardLayout = deviceData.isSmallerThanLG
    ? MobileDashboardLayout
    : DesktopDashboardLayout;

  if (shouldRenderLoader) {
    return <Loader />;
  }

  return (
    <DashboardLayout>
      <Matches />
    </DashboardLayout>
  );
};
