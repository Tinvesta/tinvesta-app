import {
  CardMembership as CardMembershipIcon,
  JoinInner as JoinInnerIcon,
  Logout as LogoutIcon,
  Settings as SettingsIcon,
  StarBorder as StarBorderIcon,
  Style as StyleIcon,
} from '@mui/icons-material';
import { Avatar, IconButton, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useUser } from '@utils';

import { ERoutes } from '@enums';

import S from './desktop-dashboard.styles';
import { IDesktopDashboardLayoutProps } from './desktop-dashboard.types';

export const DesktopDashboardLayout = ({ children }: IDesktopDashboardLayoutProps): JSX.Element => {
  const { logout, user } = useUser();
  const router = useRouter();

  const isActiveOption = (route: ERoutes): boolean => router.pathname === route;

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
                src={user?.user_metadata?.avatar_url}
                sx={{ width: 65, height: 65, cursor: 'pointer' }}
              />
            </Link>
            <S.StyledUserInfoDetails>
              <S.StyledWelcomeTypography variant="caption">
                Hi, {user?.first_name}
              </S.StyledWelcomeTypography>
            </S.StyledUserInfoDetails>
          </S.StyledUserInfoWrapper>
          <S.StyledMenu>
            <Link passHref href={ERoutes.DASHBOARD_DISCOVER}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_DISCOVER)}>
                <S.StyledMenuItemTopBox />
                <S.StyledMenuItemIcon>
                  <StyleIcon />
                </S.StyledMenuItemIcon>
                {isActiveOption(ERoutes.DASHBOARD_DISCOVER) && (
                  <Typography variant="caption">Discover</Typography>
                )}
                <S.StyledMenuItemBottomBox />
              </S.StyledMenuItem>
            </Link>
            <Link passHref href={ERoutes.DASHBOARD_MATCHES}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_MATCHES)}>
                <S.StyledMenuItemTopBox />
                <S.StyledMenuItemIcon>
                  <JoinInnerIcon />
                </S.StyledMenuItemIcon>
                {isActiveOption(ERoutes.DASHBOARD_MATCHES) && (
                  <Typography variant="caption">Matches</Typography>
                )}
                <S.StyledMenuItemBottomBox />
              </S.StyledMenuItem>
            </Link>
            <Link passHref href={ERoutes.DASHBOARD_LIKES}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_LIKES)}>
                <S.StyledMenuItemTopBox />
                <S.StyledMenuItemIcon>
                  <StarBorderIcon />
                </S.StyledMenuItemIcon>
                {isActiveOption(ERoutes.DASHBOARD_LIKES) && (
                  <Typography variant="caption">Likes</Typography>
                )}
                <S.StyledMenuItemBottomBox />
              </S.StyledMenuItem>
            </Link>
            <Link passHref href={ERoutes.DASHBOARD_SUBSCRIPTION}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_SUBSCRIPTION)}>
                <S.StyledMenuItemTopBox />
                <S.StyledMenuItemIcon>
                  <CardMembershipIcon />
                </S.StyledMenuItemIcon>
                {isActiveOption(ERoutes.DASHBOARD_SUBSCRIPTION) && (
                  <Typography variant="caption">Subscription</Typography>
                )}
                <S.StyledMenuItemBottomBox />
              </S.StyledMenuItem>
            </Link>
            <Link passHref href={ERoutes.DASHBOARD_SETTINGS}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_SETTINGS)}>
                <S.StyledMenuItemTopBox />
                <S.StyledMenuItemIcon>
                  <SettingsIcon />
                </S.StyledMenuItemIcon>
                {isActiveOption(ERoutes.DASHBOARD_SETTINGS) && (
                  <Typography variant="caption">Settings</Typography>
                )}
                <S.StyledMenuItemBottomBox />
              </S.StyledMenuItem>
            </Link>
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
