import { Logout as LogoutIcon } from '@mui/icons-material';
import { Avatar, IconButton, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { parseProfileAvatarUrl, useTranslation, useUser } from '@utils';

import { ERoutes } from '@enums';

import { getSideMenuOptions, translationStrings } from './desktop-dashboard.defaults';
import S from './desktop-dashboard.styles';
import { IDesktopDashboardLayoutProps } from './desktop-dashboard.types';

export const DesktopDashboardLayout = ({ children }: IDesktopDashboardLayoutProps): JSX.Element => {
  const router = useRouter();
  const { logout, user } = useUser();
  const translations = useTranslation(translationStrings);

  const isActiveOption = (route: ERoutes): boolean => router.pathname === route;

  const sideMenuOptions = getSideMenuOptions(translations);

  return (
    <S.StyledWrapper>
      <Head>
        <title>Tinvesta</title>
      </Head>
      <S.StyledAsideWrapper>
        <span>
          <S.StyledLogoWrapper>
            <Image
              priority
              alt="Tinvesta"
              height={50}
              objectFit="fill"
              src="/images/brandmark-transparent-white.png"
              width={50}
            />
          </S.StyledLogoWrapper>
          <S.StyledUserInfoWrapper>
            <Link passHref href={ERoutes.DASHBOARD_PROFILE}>
              <Avatar
                src={parseProfileAvatarUrl(user?.profile_avatar_url)}
                sx={{ width: 65, height: 65, cursor: 'pointer' }}
              />
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
          <IconButton color="primary" size="large" onClick={logout}>
            <LogoutIcon />
          </IconButton>
        </S.StyledAsideBottomContentWrapper>
      </S.StyledAsideWrapper>
      <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
