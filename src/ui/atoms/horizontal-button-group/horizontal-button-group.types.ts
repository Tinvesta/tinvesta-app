import { ButtonGroupProps, ButtonProps } from '@mui/material';
import { MouseEvent, ReactNode } from 'react';

export interface IHorizontalButtonGroupOption extends ButtonProps {
  key?: string;
  label: ReactNode;
  value: string | number;
}

export interface IHorizontalButtonGroupProps extends ButtonGroupProps {
  activeItem?: string | number;
  onOptionClick?: (value: string | number, event: MouseEvent<HTMLButtonElement>) => void;
  options: IHorizontalButtonGroupOption[];
}
