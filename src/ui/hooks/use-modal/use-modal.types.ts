import { ModalProps } from '@mui/material';

export interface IUseModalAttributes {
  align?: 'right' | 'center' | 'left';
  defaultIsOpenState?: boolean;
  withBorderRadius?: boolean;
  withCloseIcon?: boolean;
  withPadding?: boolean;
}

export interface IModalProps extends Omit<ModalProps, 'open' | 'onClose'> {
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick') => void;
  open?: boolean;
}
