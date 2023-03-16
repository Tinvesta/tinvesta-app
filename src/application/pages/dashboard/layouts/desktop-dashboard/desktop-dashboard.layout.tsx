import {
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  SignalWifiConnectedNoInternet4 as SignalWifiConnectedNoInternet4Icon,
} from '@mui/icons-material';
import { CircularProgress, IconButton, Typography } from '@mui/material';
import useOnlineState from 'beautiful-react-hooks/useOnlineState';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIsFetching, useIsMutating } from 'react-query';

import { Scrollbar } from '@ui';

import { parseProfileAvatarUrl, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { getSideMenuOptions, translationStrings } from './desktop-dashboard.defaults';
import S from './desktop-dashboard.styles';
import { IDesktopDashboardLayoutProps } from './desktop-dashboard.types';

export const DesktopDashboardLayout = ({ children }: IDesktopDashboardLayoutProps): JSX.Element => {
  const router = useRouter();
  const isOnline = useOnlineState();
  const isFetching = useIsFetching();
  const isMutating = useIsMutating();
  const { logout, user } = useUser();
  const translations = useTranslation(translationStrings);

  const isActiveOption = (route: ERoutes): boolean => router.pathname === route;

  const sideMenuOptions = getSideMenuOptions(translations);

  return (
    <S.StyledWrapper>
      <S.StyledAsideWrapper>
        <span>
          <S.StyledLogoWrapper>
            <Link passHref href={ERoutes.DASHBOARD_DISCOVER}>
              <Image
                priority
                alt="Tinvesta"
                height={50}
                objectFit="fill"
                src="/images/brandmark-transparent-white.png"
                style={{ cursor: 'pointer' }}
                width={50}
              />
            </Link>
          </S.StyledLogoWrapper>
          <S.StyledUserInfoWrapper>
            <Link passHref href={ERoutes.DASHBOARD_PROFILE}>
              <S.StyledAvatarWrapper>
                <S.StyledAvatar src={parseProfileAvatarUrl(user?.profile_avatar_url)} />
                <S.StyledAvatarIconButtonHover color="primary">
                  <SettingsIcon fontSize="large" />
                </S.StyledAvatarIconButtonHover>
              </S.StyledAvatarWrapper>
            </Link>
            <S.StyledUserInfoDetails>
              <S.StyledWelcomeTypography variant="caption">
                {translations.componentDashboardSidemenuFirstNamePrefix} {user?.first_name}
              </S.StyledWelcomeTypography>
            </S.StyledUserInfoDetails>
          </S.StyledUserInfoWrapper>
          <S.StyledMenu>
            {sideMenuOptions.map((_sideMenuOption) => {
              const isActive = isActiveOption(_sideMenuOption.route);

              return (
                <Link key={_sideMenuOption.label} passHref href={_sideMenuOption.route}>
                  <S.StyledMenuItem active={isActive}>
                    <S.StyledMenuItemTopBox />
                    <S.StyledMenuItemIcon>{_sideMenuOption.icon}</S.StyledMenuItemIcon>
                    {isActive && <Typography variant="caption">{_sideMenuOption.label}</Typography>}
                    <S.StyledMenuItemBottomBox />
                  </S.StyledMenuItem>
                </Link>
              );
            })}
          </S.StyledMenu>
        </span>
        <S.StyledAsideBottomContentWrapper>
          {isFetching || isMutating ? <CircularProgress color="secondary" size={40} /> : null}
          {!isOnline && <SignalWifiConnectedNoInternet4Icon />}
          <IconButton color="secondary" size="large" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </S.StyledAsideBottomContentWrapper>
      </S.StyledAsideWrapper>
      <S.StyledContentWrapper>
        <Scrollbar height="100%">{children}</Scrollbar>
      </S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
