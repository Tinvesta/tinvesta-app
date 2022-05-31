import { ModalProps } from '@mui/material';
import { CSSProperties } from 'react';

export interface IUseModalProps {
  align?: 'right' | 'center' | 'left';
  alwaysFullWidth?: boolean;
  backgroundStyles?: CSSProperties;
  defaultIsOpenState?: boolean;
  withBorderRadius?: boolean;
  withCloseIcon?: boolean;
  withPadding?: boolean;
}

export interface IModalProps extends Omit<ModalProps, 'open' | 'onClose'> {
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick') => void;
  open?: boolean;
  title?: string;
}
