import {
  CardMembership as CardMembershipIcon,
  Gavel as GavelIcon,
  JoinInner as JoinInnerIcon,
  Policy as PolicyIcon,
  StarBorder as StarBorderIcon,
  Style as StyleIcon,
} from '@mui/icons-material';
import { Avatar, Button, Typography } from '@mui/material';
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
      <S.StyledAsideWrapper>
        <span>
          <S.StyledLogoWrapper>
            <Image
              priority
              alt="Tinvesta"
              height={28}
              objectFit="fill"
              src="/images/brandmark-full-logo-transparent-white.png"
              width={200}
            />
          </S.StyledLogoWrapper>
          <S.StyledUserInfoWrapper>
            <Avatar src={user?.user_metadata?.avatar_url} sx={{ width: 56, height: 56 }} />
            <S.StyledUserInfoDetails>
              <Typography>
                {user?.first_name} {user?.last_name}
              </Typography>
            </S.StyledUserInfoDetails>
          </S.StyledUserInfoWrapper>
          <S.StyledMenu>
            <Link passHref href={ERoutes.DASHBOARD_DISCOVER}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_DISCOVER)}>
                <S.StyledMenuItemIcon>
                  <StyleIcon />
                </S.StyledMenuItemIcon>
                Discover
              </S.StyledMenuItem>
            </Link>
            <Link passHref href={ERoutes.DASHBOARD_MATCHES}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_MATCHES)}>
                <S.StyledMenuItemIcon>
                  <JoinInnerIcon />
                </S.StyledMenuItemIcon>
                Matches
              </S.StyledMenuItem>
            </Link>
            <Link passHref href={ERoutes.DASHBOARD_LIKES}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_LIKES)}>
                <S.StyledMenuItemIcon>
                  <StarBorderIcon />
                </S.StyledMenuItemIcon>
                Likes
              </S.StyledMenuItem>
            </Link>
            <Link passHref href={ERoutes.DASHBOARD_SUBSCRIPTION}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_SUBSCRIPTION)}>
                <S.StyledMenuItemIcon>
                  <CardMembershipIcon />
                </S.StyledMenuItemIcon>
                Subscription
              </S.StyledMenuItem>
            </Link>
          </S.StyledMenu>
          <S.StyledMenu>
            <Link passHref href={ERoutes.DASHBOARD_DISCOVER}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_DISCOVER)}>
                <S.StyledMenuItemIcon>
                  <PolicyIcon />
                </S.StyledMenuItemIcon>
                Privacy and Policy
              </S.StyledMenuItem>
            </Link>
            <Link passHref href={ERoutes.DASHBOARD_MATCHES}>
              <S.StyledMenuItem active={isActiveOption(ERoutes.DASHBOARD_MATCHES)}>
                <S.StyledMenuItemIcon>
                  <GavelIcon />
                </S.StyledMenuItemIcon>
                Terms and Conditions
              </S.StyledMenuItem>
            </Link>
          </S.StyledMenu>
        </span>
        <Button variant="outlined" onClick={logout}>
          Logout
        </Button>
      </S.StyledAsideWrapper>
      <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
