import { Button, DialogContent, Typography } from '@mui/material';

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
  const { Modal } = useModal({ withCloseIcon: false });

  return (
    <Modal {...modalProps} open={open} onClose={onClose}>
      <S.StyledWrapper>
        {title && (
          <Typography
            align="center"
            fontWeight={700}
            marginTop={3}
            variant={deviceData.isSmallerThanXS ? 'h6' : 'h5'}
            {...titleProps}
          >
            {title}
          </Typography>
        )}
        {content ? (
          <DialogContent {...contentProps}>{content}</DialogContent>
        ) : (
          description && (
            <DialogContent {...contentProps}>
              <Typography align="center" variant="body2">
                {description}
              </Typography>
            </DialogContent>
          )
        )}
        {(cancellationText || confirmationText) && (
          <S.StyledDialogActions>
            {cancellationText && (
              <Button
                fullWidth
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
                fullWidth
                color="primary"
                size={deviceData.isSmallerThanXS ? 'small' : 'medium'}
                variant="contained"
                {...confirmationButtonProps}
                onClick={onConfirm}
              >
                {confirmationText}
              </Button>
            )}
          </S.StyledDialogActions>
        )}
      </S.StyledWrapper>
    </Modal>
  );
};
