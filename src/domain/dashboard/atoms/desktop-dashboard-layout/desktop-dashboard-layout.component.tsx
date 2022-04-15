import S from './desktop-dashboard-layout.styles';
import { IDesktopDashboardLayoutProps } from './desktop-dashboard-layout.types';

export const DesktopDashboardLayout = ({
  asideChildren,
  contentChildren,
}: IDesktopDashboardLayoutProps): JSX.Element => (
  <S.StyledWrapper>
    <S.StyledAsideWrapper>{asideChildren}</S.StyledAsideWrapper>
    <S.StyledContentWrapper>{contentChildren}</S.StyledContentWrapper>
  </S.StyledWrapper>
);
