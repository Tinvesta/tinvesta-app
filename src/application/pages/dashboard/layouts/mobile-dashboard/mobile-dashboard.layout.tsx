import {
  Logout as LogoutIcon,
  SignalWifiConnectedNoInternet4 as SignalWifiConnectedNoInternet4Icon,
} from '@mui/icons-material';
import { Avatar, CircularProgress, IconButton } from '@mui/material';
import useOnlineState from 'beautiful-react-hooks/useOnlineState';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIsFetching, useIsMutating } from 'react-query';
import { useDeviceDetect } from 'use-device-detect';

import { Scrollbar } from '@ui';

import { parseProfileAvatarUrl, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { getBottomNavigationOptions, translationStrings } from './mobile-dashboard.defaults';
import S from './mobile-dashboard.styles';
import { IMobileDashboardLayoutProps } from './mobile-dashboard.types';

export const MobileDashboardLayout = ({ children }: IMobileDashboardLayoutProps): JSX.Element => {
  const router = useRouter();
  const isOnline = useOnlineState();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const { logout, user } = useUser();
  const { deviceData } = useDeviceDetect();
  const translations = useTranslation(translationStrings);

  const isActiveOption = (route: ERoutes): boolean => router.pathname === route;

  const bottomNavigationOptions = getBottomNavigationOptions(translations);

  const imageSize = deviceData.isSmallerThanXS ? 35 : 45;

  return (
    <S.StyledWrapper>
      <S.StyledTopNavigation>
        <Link passHref href={ERoutes.DASHBOARD_PROFILE}>
          <Avatar
            src={parseProfileAvatarUrl(user?.profile_avatar_url)}
            sx={{ width: imageSize, height: imageSize, cursor: 'pointer' }}
          />
        </Link>
        <Link passHref href={ERoutes.DASHBOARD_DISCOVER}>
          <S.StyledLogoWrapper height={imageSize}>
            <Image
              priority
              alt="Tinvesta"
              height={imageSize}
              objectFit="fill"
              src="/images/brandmark-transparent-white.png"
              width={imageSize}
            />
          </S.StyledLogoWrapper>
        </Link>
        <S.StyledRightTopNavigationWrapper>
          {isFetching || isMutating ? (
            <CircularProgress color="secondary" size={deviceData.isSmallerThanXS ? 25 : 30} />
          ) : null}
          {!isOnline && (
            <SignalWifiConnectedNoInternet4Icon
              fontSize={deviceData.isSmallerThanXS ? 'small' : 'medium'}
            />
          )}
          <IconButton color="secondary" size="medium" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </S.StyledRightTopNavigationWrapper>
      </S.StyledTopNavigation>
      <S.StyledContentWrapper>
        <Scrollbar height="100%">{children}</Scrollbar>
      </S.StyledContentWrapper>
      <S.StyledBottomNavigation>
        {bottomNavigationOptions.map((_bottomNavigationOption) => {
          const isActive = isActiveOption(_bottomNavigationOption.route);

          return (
            <Link key={_bottomNavigationOption.label} passHref href={_bottomNavigationOption.route}>
              <S.StyledBottomNavigationAction
                icon={_bottomNavigationOption.icon}
                label={_bottomNavigationOption.label}
                showLabel={isActive}
              />
            </Link>
          );
        })}
      </S.StyledBottomNavigation>
    </S.StyledWrapper>
  );
};
