import S from './desktop-onboarding-layout.styles';
import { IDesktopOnboardingLayoutProps } from './desktop-onboarding-layout.types';

export const DesktopOnboardingLayout = ({
  children,
  heading,
}: IDesktopOnboardingLayoutProps): JSX.Element => (
  <S.StyledWrapper>
    <S.StyledHeading fontWeight={700} variant="h4">
      {heading}
    </S.StyledHeading>
    <S.StyledChildrenWrapper>{children}</S.StyledChildrenWrapper>
  </S.StyledWrapper>
);
