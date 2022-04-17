import S from './desktop-dashboard.styles';
import { IDesktopDashboardLayoutProps } from './desktop-dashboard.types';

export const DesktopDashboardLayout = ({ children }: IDesktopDashboardLayoutProps): JSX.Element => (
  <S.StyledWrapper>
    <S.StyledAsideWrapper>Aside</S.StyledAsideWrapper>
    <S.StyledContentWrapper>{children}</S.StyledContentWrapper>
  </S.StyledWrapper>
);
