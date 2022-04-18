import {
  CardMembership as CardMembershipIcon,
  Gavel as GavelIcon,
  JoinInner as JoinInnerIcon,
  Policy as PolicyIcon,
  StarBorder as StarBorderIcon,
  Style as StyleIcon,
} from '@mui/icons-material';
import { Avatar, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

import { useUser } from '@utils';

import { ERoutes } from '@enums';

import S from './desktop-dashboard.styles';
import { IDesktopDashboardLayoutProps } from './desktop-dashboard.types';

export const DesktopDashboardLayout = ({ children }: IDesktopDashboardLayoutProps): JSX.Element => {
  const { user } = useUser();

  return (
    <S.StyledWrapper>
      <S.StyledAsideWrapper>
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
            <S.StyledMenuItem>
              <S.StyledMenuItemIcon>
                <StyleIcon />
              </S.StyledMenuItemIcon>
              Discover
            </S.StyledMenuItem>
          </Link>
          <Link passHref href={ERoutes.DASHBOARD_MATCHES}>
            <S.StyledMenuItem>
              <S.StyledMenuItemIcon>
                <JoinInnerIcon />
              </S.StyledMenuItemIcon>
              Matches
            </S.StyledMenuItem>
          </Link>
          <Link passHref href={ERoutes.DASHBOARD_LIKES}>
            <S.StyledMenuItem>
              <S.StyledMenuItemIcon>
                <StarBorderIcon />
              </S.StyledMenuItemIcon>
              Likes
            </S.StyledMenuItem>
          </Link>
          <Link passHref href={ERoutes.DASHBOARD_SUBSCRIPTION}>
            <S.StyledMenuItem>
              <S.StyledMenuItemIcon>
                <CardMembershipIcon />
              </S.StyledMenuItemIcon>
              Subscription
            </S.StyledMenuItem>
          </Link>
        </S.StyledMenu>
        <S.StyledMenu>
          <Link passHref href={ERoutes.DASHBOARD_DISCOVER}>
            <S.StyledMenuItem>
              <S.StyledMenuItemIcon>
                <PolicyIcon />
              </S.StyledMenuItemIcon>
              Privacy and Policy
            </S.StyledMenuItem>
          </Link>
          <Link passHref href={ERoutes.DASHBOARD_MATCHES}>
            <S.StyledMenuItem>
              <S.StyledMenuItemIcon>
                <GavelIcon />
              </S.StyledMenuItemIcon>
              Terms and Conditions
            </S.StyledMenuItem>
          </Link>
        </S.StyledMenu>
      </S.StyledAsideWrapper>
      <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
