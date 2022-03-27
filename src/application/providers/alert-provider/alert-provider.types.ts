import { AlertColor } from '@mui/material';
import { ReactNode } from 'react';

export interface IAlert {
  message: string;
  type: AlertColor;
}

export interface IAlertProviderProps {
  children: ReactNode | ReactNode[];
}
