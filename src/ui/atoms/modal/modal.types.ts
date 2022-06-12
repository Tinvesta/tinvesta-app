import { ModalProps } from '@mui/material';
import { CSSProperties } from 'react';

export interface IModalProps extends Omit<ModalProps, 'onClose'> {
  align?: 'right' | 'center' | 'left';
  alwaysFullWidth?: boolean;
  backgroundStyles?: CSSProperties;
  defaultIsOpenState?: boolean;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick') => void;
  title?: string;
  withBorderRadius?: boolean;
  withCloseIcon?: boolean;
  withPadding?: boolean;
}
