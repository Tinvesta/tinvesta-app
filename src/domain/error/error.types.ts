import { ReactNode } from 'react';

export interface IErrorProps {
  children?: ReactNode;
  code: string;
  disableLoginLogoutButton?: boolean;
  message: string;
}
