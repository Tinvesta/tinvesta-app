import { Avatar, Typography } from '@mui/material';
import Image from 'next/image';

import { useUser } from '@utils';

import S from './desktop-dashboard.styles';
import { IDesktopDashboardLayoutProps } from './desktop-dashboard.types';

export const DesktopDashboardLayout = ({ children }: IDesktopDashboardLayoutProps): JSX.Element => {
  const { user } = useUser();

  console.log(user);

  return (
    <S.StyledWrapper>
      <S.StyledAsideWrapper>
        <S.StyledLogoWrapper>
          <Image
            priority
            alt="Tinvesta"
            height={35}
            objectFit="fill"
            src="/images/brandmark-full-logo-transparent-white.png"
            width={256}
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
      </S.StyledAsideWrapper>
      <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
    </S.StyledWrapper>
  );
};
