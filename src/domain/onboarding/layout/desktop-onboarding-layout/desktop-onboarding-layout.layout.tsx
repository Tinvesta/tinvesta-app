import { Typography } from '@mui/material';

import S from './desktop-onboarding-layout.styles';
import { IDesktopOnboardingLayoutProps } from './desktop-onboarding-layout.types';

export const DesktopOnboardingLayout = ({
  children,
}: IDesktopOnboardingLayoutProps): JSX.Element => (
  <S.StyledWrapper>
    <Typography fontWeight={700} variant="h4">
      Create an account
    </Typography>
    <S.StyledChildrenWrapper>{children}</S.StyledChildrenWrapper>
  </S.StyledWrapper>
);
