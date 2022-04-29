import { ModalProps } from '@mui/material';

export interface IUseModalAttributes {
  defaultIsOpenState?: boolean;
  withCloseIcon?: boolean;
}

export interface IModalProps extends Omit<ModalProps, 'open' | 'onClose'> {
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick') => void;
  open?: boolean;
}
