import { Button, DialogActions, DialogContent, Typography } from '@mui/material';

import { useModal } from '@ui';

import { useDeviceDetect } from '@utils';

import S from './confirmation-modal.styles';
import { IConfirmationModalProps } from './confirmation-modal.types';

export const ConfirmationModal = ({
  onCancel,
  onConfirm,
  open,
  onClose,
  options: {
    cancellationButtonProps,
    cancellationText,
    confirmationButtonProps,
    confirmationText,
    content,
    contentProps,
    description,
    modalProps,
    title,
    titleProps,
  } = {},
}: IConfirmationModalProps): JSX.Element => {
  const { deviceData } = useDeviceDetect();
  const { Modal } = useModal();

  return (
    <Modal {...modalProps} open={open} onClose={onClose}>
      <S.StyledWrapper>
        {title && (
          <Typography align="center" fontWeight={700} marginTop={3} variant="h4" {...titleProps}>
            {title}
          </Typography>
        )}
        {content ? (
          <DialogContent {...contentProps}>{content}</DialogContent>
        ) : (
          description && (
            <DialogContent {...contentProps}>
              <Typography variant="body1">{description}</Typography>
            </DialogContent>
          )
        )}
        {(cancellationText || confirmationText) && (
          <DialogActions>
            {cancellationText && (
              <Button
                {...cancellationButtonProps}
                size={deviceData.isSmallerThanXS ? 'small' : 'medium'}
                variant="outlined"
                onClick={onCancel}
              >
                {cancellationText}
              </Button>
            )}
            {confirmationText && (
              <Button
                color="primary"
                size={deviceData.isSmallerThanXS ? 'small' : 'medium'}
                variant="contained"
                {...confirmationButtonProps}
                onClick={onConfirm}
              >
                {confirmationText}
              </Button>
            )}
          </DialogActions>
        )}
      </S.StyledWrapper>
    </Modal>
  );
};
