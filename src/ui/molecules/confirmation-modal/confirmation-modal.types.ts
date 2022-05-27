import { ButtonProps, DialogContentProps } from '@mui/material';
import { MouseEvent, ReactNode } from 'react';

import { IModalProps } from '@ui';

export interface IConfirmationModalOptions {
  cancellationButtonProps?: ButtonProps;
  cancellationText?: ReactNode;
  confirmationButtonProps?: ButtonProps;
  confirmationText?: ReactNode;
  content?: ReactNode | null;
  contentProps?: DialogContentProps;
  description?: string;
  modalProps?: Omit<IModalProps, 'open' | 'onClose' | 'children'>;
  title?: string;
}

export interface IConfirmationModalProps {
  onCancel?: (event: MouseEvent<HTMLButtonElement>) => void;
  onClose?: (event: {}, reason: 'backdropClick' | 'escapeKeyDown' | 'closeIconClick') => void;
  onConfirm?: (event: MouseEvent<HTMLButtonElement>) => void;
  open: boolean;
  options?: IConfirmationModalOptions;
}
