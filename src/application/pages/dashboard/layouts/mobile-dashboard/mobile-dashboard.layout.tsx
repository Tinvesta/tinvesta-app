import { Logout as LogoutIcon } from '@mui/icons-material';
import { Avatar, CircularProgress, IconButton } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIsFetching, useIsMutating } from 'react-query';

import { Scrollbar } from '@ui';

import { parseProfileAvatarUrl, useDeviceDetect, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { getBottomNavigationOptions, translationStrings } from './mobile-dashboard.defaults';
import S from './mobile-dashboard.styles';
import { IMobileDashboardLayoutProps } from './mobile-dashboard.types';

export const MobileDashboardLayout = ({ children }: IMobileDashboardLayoutProps): JSX.Element => {
  const router = useRouter();
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
      <Head>
        <title>Tinvesta</title>
      </Head>
      <S.StyledTopNavigation>
        <Link passHref href={ERoutes.DASHBOARD_PROFILE}>
          <Avatar
            src={parseProfileAvatarUrl(user?.profile_avatar_url)}
            sx={{ width: imageSize, height: imageSize, cursor: 'pointer' }}
          />
        </Link>
        <Link passHref href={ERoutes.DASHBOARD_DISCOVER}>
          <span
            style={{
              position: 'absolute',
              right: '50%',
              transform: 'translateX(50%)',
              height: imageSize,
            }}
          >
            <Image
              priority
              alt="Tinvesta"
              height={imageSize}
              objectFit="fill"
              src="/images/brandmark-transparent-white.png"
              style={{
                cursor: 'pointer',
              }}
              width={imageSize}
            />
          </span>
        </Link>
        <S.StyledRightTopNavigationWrapper>
          {isFetching || isMutating ? (
            <CircularProgress color="secondary" size={deviceData.isSmallerThanXS ? 25 : 30} />
          ) : null}
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
