import { ReactNode } from 'react';

export interface IErrorProps {
  children?: ReactNode;
  code: string;
  message: string;
}
