import { ReactNode } from 'react';

export interface IHeaderAndFooterLayoutProps {
  children: ReactNode | ReactNode[];
  openLoginModal: () => void;
}
