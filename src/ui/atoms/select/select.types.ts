import { SelectProps } from '@mui/material';
import { ReactNode } from 'react';

export interface ISelectOption {
  key?: string;
  label: ReactNode;
  value: string | number;
}

export interface ISelectProps extends SelectProps {
  options: ISelectOption[];
}
