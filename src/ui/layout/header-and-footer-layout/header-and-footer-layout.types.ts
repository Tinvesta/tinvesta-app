import { ReactNode } from 'react';

export interface IHeaderAndFooterLayoutProps {
  children: ReactNode | ReactNode[];
  disableLoginLogoutButton?: boolean;
  openLoginModal: () => void;
}
