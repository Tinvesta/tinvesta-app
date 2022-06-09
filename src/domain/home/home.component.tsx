import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { StringParam, useQueryParam } from 'use-query-params';

import { useDeviceDetect, useLocalStorage, useUser } from '@utils';

import { ERoutes } from '@enums';

import { USER_REF_LOCAL_STORAGE_KEY } from '@constants';

import { DesktopHome, MobileHome } from './molecules';

export const Home = (): JSX.Element => {
  const router = useRouter();
  const { isLoading, user } = useUser();
  const { deviceData } = useDeviceDetect();
  const [refQueryParam] = useQueryParam('ref', StringParam);
  const [redirectQueryParam] = useQueryParam('redirect', StringParam);
  const [userRefLocalStorage, setUserRefLocalStorage] = useLocalStorage(
    USER_REF_LOCAL_STORAGE_KEY,
    '',
  );

  useEffect(() => {
    if (refQueryParam && !userRefLocalStorage) {
      setUserRefLocalStorage(refQueryParam);
    }
  }, [refQueryParam]);

  useEffect(() => {
    if (user && redirectQueryParam === 'dashboard') {
      router.push(user.client_type_id ? ERoutes.DASHBOARD : ERoutes.ONBOARDING);
    }
  }, [redirectQueryParam, user]);

  const isSignedIn = !!user && !isLoading;

  const HomeComponent = deviceData.isSmallerThanSM ? MobileHome : DesktopHome;

  return <HomeComponent clientTypeId={user?.client_type_id} isSignedIn={isSignedIn} />;
};
